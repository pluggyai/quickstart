import { VercelRequest, VercelResponse } from '@vercel/node'
import { getItems } from '../lib/items'

export default async (req: VercelRequest, res: VercelResponse) => {
  const { from, skip, size } = req.query
  const { authorization } = req.headers
  const { SERVER_AUTH_TOKEN } = process.env

  // If Authorization is required validate that the token is sent in the header
  if (SERVER_AUTH_TOKEN && (!authorization || authorization !== `Bearer ${SERVER_AUTH_TOKEN}`)) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  if (!from) {
    res.status(400).json({ message: 'from parameter missing in query' })
    return
  }

  if (typeof from !== 'string') {
    res.status(400).json({ message: 'from parameter should be a string' })
    return
  }

  if (from.length !== 24) {
    res.status(400).json({ message: 'from should be a 24-length timestamp' })
    return
  }

  const nSkip = parseInt(skip as string)
  if (skip && isNaN(nSkip)) {
    res.status(400).json({ message: 'skip should be an integer number' })
    return
  }

  const nSize = parseInt(size as string)
  if (size && isNaN(nSize)) {
    res.status(400).json({ message: 'size should be an integer number lower than 20' })
    return
  }

  try {
    const items = await getItems(from, nSkip, nSize)
    res.status(200).json(items)
  } catch (error) {
    const message = 'There was an error while retrieving items.'
    console.error(message, error)
    res.status(500).json({ message })
  }
}
