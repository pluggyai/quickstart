import { VercelRequest, VercelResponse } from '@vercel/node'
import { PluggyClient } from 'pluggy-sdk'

const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET } = process.env

// Pluggy ids are UUIDs. Check them before using them in an API request.
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export default function (req: VercelRequest, res: VercelResponse) {
  if (!PLUGGY_CLIENT_ID || !PLUGGY_CLIENT_SECRET) {
    res.status(500).json({ error: 'Missing PLUGGY_CLIENT_ID or PLUGGY_CLIENT_SECRET' })
    return
  }

  const pluggyClient = new PluggyClient({
    clientId: PLUGGY_CLIENT_ID,
    clientSecret: PLUGGY_CLIENT_SECRET
  })

  const { itemId, options } = req.body || {}

  if (itemId != null && (typeof itemId !== 'string' || !UUID_REGEX.test(itemId))) {
    res.status(400).json({ error: 'Invalid itemId' })
    return
  }

  pluggyClient.createConnectToken(itemId, options).then((data) => res.json(data))
}
