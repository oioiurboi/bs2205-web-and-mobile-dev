/**
 * For development purposes only.
 */

const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();

const { CONN } = process.env;
const client = new MongoClient(CONN, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("houzen");
    const properties = db.collection("properties");
    const result = await properties.find({}).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);