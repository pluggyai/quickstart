import { MongoClient } from 'mongodb'

const { MONGO_URI } = process.env

export function getClient() {
  if (!MONGO_URI) {
    throw new Error('Missing MONGO_URI environment variable')
  }

  return new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
