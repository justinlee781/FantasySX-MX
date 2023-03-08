const mongoose = require('mongoose');

const connectDB = async () => {
  // try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });

    console.log(`MongoDB Connected! : ${conn.connection.host}`)

    // console.log(`MongoDB connected: ${conn.connection.host}`);
  // } catch (error) {
  //   console.error(`Error connecting to MongoDB: ${error.message}`);
  //   process.exit(1);
  // }
};

module.exports =  connectDB ;
