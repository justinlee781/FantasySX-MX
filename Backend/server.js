import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

app.use(express.json());

const uri = "mongodb+srv://Justinlee781:Pinittowinit762@fantasy1.z8ydubf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Connect to the MongoDB database
client.connect((err) => {
if (err) {
console.error(err);
return;
}
console.log("Connected to MongoDB");

const db = client.db("myDatabase");

// Add a new user to the database
app.post('/api/signup', async (req, res) => {
try {
// Extract the email and password from the request body
const { email, password } = req.body;
  // Check if the user already exists in the database
  const user = await db.collection("users").findOne({ email });
  if (user) {
    // Return an error message if the user already exists
    res.status(409).json({ message: "User already exists" });
    return;
  }

  // Insert the new user into the database
  await db.collection("users").insertOne({ email, password });

  // Return a success message
  res.status(201).json({ message: "User created successfully" });
} catch (err) {
  // Return an error message if there was a problem creating the user
  res.status(500).json({ message: "Failed to create user" });
}
});

// Get some data from the database
app.get('/api/data', async (req, res) => {
try {
const data = await db.collection("data").findOne();
res.json(data);
} catch (err) {
console.error(err);
res.status(500).json({ message: "Failed to get data" });
}
});

// Get all users from the database
app.get('/api/users', async (req, res) => {
try {
const users = await db.collection('users').find().toArray();
res.json(users);
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Server error' });
}
});

// Start the server
app.listen(3000, () => {
console.log('Server is listening on port 3000');
});

// Handle errors that occur during the connection to the MongoDB database
client.on('error', (err) => {
console.error(err);
process.exit(1);
});
});
