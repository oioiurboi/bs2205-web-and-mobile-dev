/**
 * For development purposes only.
 */

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const result = await properties.findOne({ _id: new ObjectId("676155d4167ab57fa479a1b8") });
    console.log(result);
  } catch (e) {
    console.log(e);
    return [];
  } finally {
    await client.close();
  }
}

GetAllProperties().catch(console.dir);