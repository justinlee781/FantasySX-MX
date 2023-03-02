const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Justinlee781:Pinittowinit762@fantasy1.z8ydubf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

module.exports = client;
