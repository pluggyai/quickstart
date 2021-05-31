import { MongoClient } from 'mongodb'

const { MONGO_URI } = process.env

export function getClient() {
  return new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
