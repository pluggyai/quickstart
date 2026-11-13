import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { ConnectTokenOptions, PluggyClient } from 'pluggy-sdk'
import { isUuid } from './validation'

const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET } = process.env

type ConnectTokenPayload = {
  itemId?: string
  options?: ConnectTokenOptions
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (!PLUGGY_CLIENT_ID || !PLUGGY_CLIENT_SECRET) {
    throw new Error('Missing PLUGGY_CLIENT_ID or PLUGGY_CLIENT_SECRET')
  }
  const pluggyClient = new PluggyClient({
    clientId: PLUGGY_CLIENT_ID,
    clientSecret: PLUGGY_CLIENT_SECRET
  })

  const { itemId, options }: ConnectTokenPayload = event.body ? JSON.parse(event.body) : {}

  if (itemId != null && !isUuid(itemId)) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: 'Invalid itemId' })
    };
  }

  const connectToken = await pluggyClient.createConnectToken(itemId, options)

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(connectToken)
  };
};
