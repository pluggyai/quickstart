import { VercelRequest, VercelResponse } from '@vercel/node'

import { getItems, PAGE_MAX_SIZE } from '../lib/items'
import { ItemSearchOptions } from '../lib/types'

export default async (req: VercelRequest, res: VercelResponse) => {
  const { from, to, skip, size } = req.query
  const { authorization } = req.headers
  const { SERVER_AUTH_TOKEN } = process.env

  const options: ItemSearchOptions = {
    from: '',
    skip: 0,
    size: PAGE_MAX_SIZE
  }
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

  options.from = from

  if (to) {
    if (typeof to !== 'string') {
      res.status(400).json({ message: 'to parameter should be a string' })
      return
    }

    if (to.length !== 24) {
      res.status(400).json({ message: 'to should be a 24-length timestamp' })
      return
    }

    options.to = to
  }

  const nSkip = parseInt(skip as string)
  if (skip && isNaN(nSkip)) {
    res.status(400).json({ message: 'skip should be an integer number' })
    return
  }
  options.skip = nSkip || 0

  const nSize = parseInt(size as string)
  if ((size && isNaN(nSize)) || nSize > PAGE_MAX_SIZE) {
    res
      .status(400)
      .json({ message: `size should be an integer number lower or equal to ${PAGE_MAX_SIZE}` })
    return
  }
  options.size = nSize || PAGE_MAX_SIZE

  try {
    const items = await getItems(options as ItemSearchOptions)
    res.status(200).json(items)
  } catch (error) {
    const message = 'There was an error while retrieving items.'
    console.error(message, error)
    res.status(500).json({ message })
  }
}
