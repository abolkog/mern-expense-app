const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExpenseSchema = Schema({
  amount: { type: Number, required: true },
  description: { type: String },
  receipt: { type: String },
  created: { type: Date, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;
