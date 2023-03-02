const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/test?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

async function saveData(data) {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get a reference to the database
    const db = client.db('myDatabase');

    // Get a reference to the collection
    const collection = db.collection('myCollection');

    // Insert a new document into the collection
    const result = await collection.insertOne(data);

    console.log(`Document inserted with _id: ${result.insertedId}`);
  } finally {
    // Close the connection
    await client.close();
  }
}

saveData({ name: 'John Doe', age: 30 });
