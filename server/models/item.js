require('dotenv').config()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.DATABASE_URL);

let itemSchema = new Schema({
  itemName: String,
  image: String,
  specification: [],
  category: String,
  priceidr: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

let Item = mongoose.model('Item', itemSchema);

module.exports = Item;