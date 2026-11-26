import { createHmac, timingSafeEqual } from 'node:crypto'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { PluggyClient } from 'pluggy-sdk'

// Pluggy ids are UUIDs. Check them before using them in an API request.
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type User = { id: string }

// ---------------------------------------------------------------------------
// REPLACE WITH YOUR REAL USER AUTHENTICATION.
//
// This endpoint hands out Connect Tokens, so it must only answer users who are
// signed in to YOUR app. By default it accepts an HS256 JWT issued by your own
// backend or identity provider, sent as `Authorization: Bearer <jwt>` and
// signed with AUTH_JWT_SECRET. The token must carry `sub` (your opaque internal
// user id, not an e-mail or a CPF) and `exp`.
//
// If your app uses another mechanism (session cookie, RS256 JWT with a JWKS,
// your auth provider's SDK), rewrite this function. Return the signed-in user,
// or null to answer 401. Never take the user id from the request body.
// ---------------------------------------------------------------------------
function authenticateRequest(req: VercelRequest, secret: string): User | null {
  const header = req.headers.authorization
  if (typeof header !== 'string' || !header.startsWith('Bearer ')) return null

  const parts = header.slice('Bearer '.length).trim().split('.')
  if (parts.length !== 3) return null
  const [encodedHeader, encodedPayload, signature] = parts

  try {
    const { alg } = JSON.parse(Buffer.from(encodedHeader, 'base64url').toString())
    if (alg !== 'HS256') return null

    const expected = createHmac('sha256', secret).update(`${encodedHeader}.${encodedPayload}`).digest()
    const received = Buffer.from(signature, 'base64url')
    if (received.length !== expected.length || !timingSafeEqual(received, expected)) return null

    const { sub, exp } = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString())
    if (typeof sub !== 'string' || sub.length === 0 || sub.length > 255) return null
    if (typeof exp !== 'number' || exp * 1000 <= Date.now()) return null

    return { id: sub }
  } catch {
    return null
  }
}

// A Connect Token created with an itemId can update that Item: only hand one
// out for Items created for this user (see `clientUserId` below).
async function userOwnsItem(pluggy: PluggyClient, userId: string, itemId: string): Promise<boolean> {
  try {
    const item = await pluggy.fetchItem(itemId)
    return item.clientUserId === userId
  } catch {
    return false
  }
}

let pluggyClient: PluggyClient | undefined

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET, AUTH_JWT_SECRET, ALLOWED_ORIGIN } = process.env

  // CORS: only the origin of your frontend, never `*`. Without ALLOWED_ORIGIN
  // no CORS header is sent, so only same-origin pages can call the endpoint.
  if (ALLOWED_ORIGIN && req.headers.origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type')
    res.setHeader('Vary', 'Origin')
  }

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  // Fail closed: never run unauthenticated because a variable is missing.
  if (!PLUGGY_CLIENT_ID || !PLUGGY_CLIENT_SECRET || !AUTH_JWT_SECRET) {
    res.status(503).json({ error: 'Endpoint not configured' })
    return
  }

  const user = authenticateRequest(req, AUTH_JWT_SECRET)
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  pluggyClient ??= new PluggyClient({ clientId: PLUGGY_CLIENT_ID, clientSecret: PLUGGY_CLIENT_SECRET })

  const { itemId } = req.body || {}
  if (itemId != null) {
    if (typeof itemId !== 'string' || !UUID_REGEX.test(itemId)) {
      res.status(400).json({ error: 'Invalid itemId' })
      return
    }
    if (!(await userOwnsItem(pluggyClient, user.id, itemId))) {
      res.status(404).json({ error: 'Item not found' })
      return
    }
  }

  try {
    // clientUserId binds the token (and the Item it creates) to the caller.
    const { accessToken } = await pluggyClient.createConnectToken(itemId ?? undefined, {
      clientUserId: user.id,
    })
    res.status(200).json({ accessToken })
  } catch (error) {
    console.error('Could not create a Connect Token:', (error as Error).message)
    res.status(502).json({ error: 'Could not create a Connect Token' })
  }
}
