import { Item } from 'pluggy-sdk'
import { MongoClient } from 'mongodb'

const { MONGO_URI, MONGO_DB_NAME } = process.env

const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export async function saveItem(item: Item) {
  await client.connect()
  const database = client.db(MONGO_DB_NAME)
  const itemsCollection = database.collection('items')
  await itemsCollection.insertOne(item)
  console.log('Successfully added item with ID:', item.id)
  await client.close()
}

export async function getItems(fromDate: string, skip: number = 0, size: number = 20) {
  await client.connect()
  const database = client.db(MONGO_DB_NAME)
  const itemsCollection = database.collection('items')
  const cursor = await itemsCollection.find({ createdAt: { $gte: fromDate } })
  const count = await cursor.count()
  const items = await cursor
    .sort({ date: 1 })
    .skip(skip)
    .limit(size < 20 ? size : 20)
    .toArray()

  await client.close()

  return {
    results: items,
    count
  }
}
