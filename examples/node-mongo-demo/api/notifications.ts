import { VercelRequest, VercelResponse } from '@vercel/node'
import { PluggyClient } from 'pluggy-sdk'
import { saveItem } from '../lib/items'

const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET } = process.env

const pluggyClient = new PluggyClient({ clientId: PLUGGY_CLIENT_ID, clientSecret: PLUGGY_CLIENT_SECRET })

export default async (req: VercelRequest, res: VercelResponse) => {
  const { id, event } = req.body
  if (!id) {
    res.status(400).json({ message: 'id parameter missing in body request.' })
    return
  }

  if (typeof id !== 'string') {
    res.status(400).json({ message: 'id parameter should be a string.' })
    return
  }

  if (id.length !== 36) {
    res.status(400).json({ message: 'Invalid id.' })
    return
  }

  if (event === 'item/created') {
    console.log('Adding new item to database.')
    const item = await pluggyClient.fetchItem(id)
    await saveItem(item)
  }

  res.status(201).json({ id })
}
