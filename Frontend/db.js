const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Justinlee781:<password>@fantasy1.z8ydubf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Connected to MongoDB Atlas");

  const db = client.db("myDatabase");

  // perform any necessary operations with the database

  // export the client and the database object
  module.exports = { client, db };
});
