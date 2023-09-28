const mongoose = require("mongoose");

const { Schema } = mongoose;

const stock = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Stock = mongoose.model("Stock", stock);

module.exports = {
  Stock,
};
