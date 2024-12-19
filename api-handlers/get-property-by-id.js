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

async function GetPropertyById(id) {
  try {
    if (typeof id !== "string") { throw new Error("Property ID Must Be A String") } // Makes mongo happy, says ObjectId is deprecated otherwise.
    await client.connect();
    const db = client.db("houzen");
    const properties = db.collection("properties");
    return await properties.findOne({ _id: new ObjectId(id) });
  } catch (e) {
    console.log(e);
    return undefined;
  } finally {
    await client.close();
  }
}

module.exports = GetPropertyById;