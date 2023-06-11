const mongoose = require("mongoose");
require("colors");

// ConnectDB Function
const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed);
    process.exit(1);
  }
};

// export
module.exports = connectDB;
