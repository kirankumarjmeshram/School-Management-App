const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected...  ${conn.connection.host}  `);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(); // process.exit() is used to terminate the process
  }
};

module.exports = connectDB;


