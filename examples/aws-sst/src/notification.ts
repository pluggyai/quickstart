import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { PluggyClient, WebhookEvent } from 'pluggy-sdk'
import { saveItem } from "./repositories/items";

const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET } = process.env

type WebhookPayload = {
  id: string
  event: WebhookEvent
}

export const handler: APIGatewayProxyHandlerV2 = async (awsEvent) => {
  if (!PLUGGY_CLIENT_ID || !PLUGGY_CLIENT_SECRET) {
    throw new Error('Missing PLUGGY_CLIENT_ID or PLUGGY_CLIENT_SECRET')
  }

  const { body } = awsEvent

  const pluggyClient = new PluggyClient({
    clientId: PLUGGY_CLIENT_ID,
    clientSecret: PLUGGY_CLIENT_SECRET
  })

  const { id, event }: WebhookPayload = body ? JSON.parse(body) : {}

  if (!id || !event) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Missing id or event'
      })
    }
  }

  if (event === 'item/created' || event === 'item/updated') {
    console.log('Adding new item to database.')
    const item = await pluggyClient.fetchItem(id)
    await saveItem(item)

    // TODO: Enqueue event to process the item sync on your system
  }

  return {
    statusCode: 201,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
    })
  };
};
