import { Item } from 'pluggy-sdk'
import { DynamoDB } from 'aws-sdk'

const TABLE_NAME = process.env.TABLE_NAME

export async function saveItem(item: Item) {
    const dynamo = new DynamoDB()

    if (!TABLE_NAME) {
      throw new Error('Missing TABLE_NAME')
    }

    const databaseParams = {
      TableName: TABLE_NAME,
      Item: {
        id: { S: item.id },
        createdAt: { S: item.createdAt.toString() },
        lastUpdatedAt: { S: item.lastUpdatedAt?.toString() },
        status: { S: item.status },
      },
    }
    await dynamo.putItem(databaseParams).promise()
    console.log('Successfully added item with ID:', item.id)
}