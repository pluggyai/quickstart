import { NextApiRequest, NextApiResponse } from 'next'
import { PluggyClient } from 'pluggy-sdk'

// Note: Destructuring works fine in server-side code (API routes)
// It only doesn't work for NEXT_PUBLIC_* variables in client-side code
// We avoid it here for consistency with the original code style
const PLUGGY_CLIENT_ID = process.env.PLUGGY_CLIENT_ID!
const PLUGGY_CLIENT_SECRET = process.env.PLUGGY_CLIENT_SECRET!

const pluggyClient = new PluggyClient({
  clientId: PLUGGY_CLIENT_ID,
  clientSecret: PLUGGY_CLIENT_SECRET,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  try {
    const { itemId } = req.body
    const data = await pluggyClient.createConnectToken(itemId)
    res.status(201).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ 
      message: 'There was an error during connect token creation.' 
    })
  }
}
