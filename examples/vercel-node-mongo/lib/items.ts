import { FilterQuery } from 'mongodb'
import { Item } from 'pluggy-sdk'

import { getClient } from './db'
import { ItemSearchOptions } from './types'

const { MONGO_DB_NAME } = process.env

export const PAGE_MAX_SIZE = 20

export async function saveItem(item: Item) {
  const client = getClient()
  await client.connect()
  const database = client.db(MONGO_DB_NAME)
  const itemsCollection = database.collection('items')
  await itemsCollection.insertOne(item)
  console.log('Successfully added item with ID:', item.id)
  await client.close()
}

export async function getItems({ from, to, skip, size }: ItemSearchOptions) {
  const client = getClient()
  await client.connect()
  const database = client.db(MONGO_DB_NAME)
  const itemsCollection = database.collection('items')
  const createdAt: FilterQuery<any> = { $gte: from }
  if (to) {
    createdAt.$lte = to
  }
  const cursor = itemsCollection.find({ createdAt })
  const count = await cursor.count()
  const limit = size < PAGE_MAX_SIZE ? size : PAGE_MAX_SIZE
  console.debug(`Querying with skip = ${skip} and limit = ${limit}`)
  const items = await cursor.sort({ createdAt: 1 }).skip(skip).limit(limit).toArray()

  await client.close()

  return {
    results: items,
    count
  }
}
