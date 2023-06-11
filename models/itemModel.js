const mongoose = require("mongoose");

const itemSchema = mongoose.Scema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }, 
    categorry: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);


const Items = mongoose.model("Items", itemSchema)

module.exports = Items