require('dotenv').config()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.DATABASE_URL);

let transactionSchema = new Schema({
  // receipt {
  //   item:
  //   qty:
  //   price:
  //   totalprice:
  // },
  receipt: [],
  grandtotal: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

let Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;