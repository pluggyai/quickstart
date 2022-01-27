import { NextApiRequest, NextApiResponse } from 'next'
import { PluggyClient } from 'pluggy-sdk'

// Avoid destructing based on nextjs: 
// https://nextjs.org/docs/basic-features/environment-variables
const PLUGGY_CLIENT_ID = process.env.PLUGGY_CLIENT_ID
const PLUGGY_CLIENT_SECRET = process.env.PLUGGY_CLIENT_SECRET
const ITEMID_TO_UPDATE = process.env.NEXT_PUBLIC_PLUGGY_UPDATE_ITEM_ID

const pluggyClient = new PluggyClient({
  clientId: PLUGGY_CLIENT_ID,
  clientSecret: PLUGGY_CLIENT_SECRET
})

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await pluggyClient.createConnectToken(ITEMID_TO_UPDATE)
    res.status(201).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'There was an error during connect token creation.' })
  }
}
