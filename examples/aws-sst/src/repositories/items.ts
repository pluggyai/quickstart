import { Item } from 'pluggy-sdk'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'

const dynamo = new DynamoDBClient({})

export async function saveItem(item: Item) {
  const tableName = process.env.TABLE_NAME
  if (!tableName) {
    throw new Error('Missing TABLE_NAME environment variable')
  }

  await dynamo.send(new PutItemCommand({
    TableName: tableName,
    Item: {
      id: { S: item.id },
      createdAt: { S: item.createdAt.toString() },
      lastUpdatedAt: { S: item.lastUpdatedAt?.toString() ?? '' },
      status: { S: item.status },
    },
  }))
  console.log('Successfully added item with ID:', item.id)
}
