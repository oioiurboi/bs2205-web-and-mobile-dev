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

async function GetAllProperties() {
  try {
    await client.connect();
    const db = client.db("houzen");
    const properties = db.collection("properties");
    return await properties.find({}).toArray();
  } catch (e) {
    console.log(e);
    return [];
  } finally {
    await client.close();
  }
}

module.exports = GetAllProperties;