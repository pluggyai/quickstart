import { NextApiRequest, NextApiResponse } from "next"
import { PluggyClient } from "pluggy-sdk"

// Avoid destructing based on nextjs:
// https://nextjs.org/docs/basic-features/environment-variables
const PLUGGY_CLIENT_ID = process.env.PLUGGY_CLIENT_ID
const PLUGGY_CLIENT_SECRET = process.env.PLUGGY_CLIENT_SECRET

const pluggyClient = new PluggyClient({
  clientId: PLUGGY_CLIENT_ID,
  clientSecret: PLUGGY_CLIENT_SECRET,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" })
    return
  }

  // itemId we want to update (if defined)
  const { itemId } = req.body
  try {
    const data = await pluggyClient.createConnectToken(itemId)
    res.status(201).json(data)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "There was an error during connect token creation." })
  }
}
