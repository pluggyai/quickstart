import { NextApiRequest, NextApiResponse } from 'next'
import { PluggyClient } from 'pluggy-sdk'

const { 
  PLUGGY_CLIENT_ID,
  PLUGGY_CLIENT_SECRET,
  NEXT_PUBLIC_PLUGGY_UPDATE_ITEM_ID: ITEMID_TO_UPDATE 
} = process.env

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
