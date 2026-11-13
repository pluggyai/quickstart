import { NextApiRequest, NextApiResponse } from 'next'
import { PluggyClient } from 'pluggy-sdk'

// Note: Destructuring works fine in server-side code (API routes)
// It only doesn't work for NEXT_PUBLIC_* variables in client-side code
// We avoid it here for consistency with the original code style
const PLUGGY_CLIENT_ID = process.env.PLUGGY_CLIENT_ID!
const PLUGGY_CLIENT_SECRET = process.env.PLUGGY_CLIENT_SECRET!

// Pluggy ids are UUIDs. Check them before using them in an API request.
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const pluggyClient = new PluggyClient({
  clientId: PLUGGY_CLIENT_ID,
  clientSecret: PLUGGY_CLIENT_SECRET,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const { itemId } = req.body || {}

  if (itemId != null && (typeof itemId !== 'string' || !UUID_REGEX.test(itemId))) {
    res.status(400).json({ message: 'Invalid itemId' })
    return
  }

  try {
    const data = await pluggyClient.createConnectToken(itemId)
    res.status(201).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ 
      message: 'There was an error during connect token creation.' 
    })
  }
}
