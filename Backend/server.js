const cors = require('cors');
const userRouter = require('./routes/userRouter'); 
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/db'); 



//configure our project to access config values from this location
dotenv.config({ path: "./config/config.env" });

connectDB(); 

//initialize our app with express
const app = express();

//use the morgan logger ONLY if we are running this project in dev
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

// Add cors middleware to allow cross-origin requests
app.use(cors());

// Use userRouter middleware for requests to /user
app.use('/user', userRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
