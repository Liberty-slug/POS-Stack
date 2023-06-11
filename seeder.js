const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const ItemModel = require("./models/itemModel");
const items = require("./utils/data");
require("colors");

// config
dotenv.config();
connectDB(process.env.MONGO_URL);

// function seeder
const importData = async () => {
  try {
    await ItemModel.deleteMany();
    const itemData = await ItemModel.insertMany(items);
    console.log("All items added".bgGreen);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1);
  }
};

importData();
