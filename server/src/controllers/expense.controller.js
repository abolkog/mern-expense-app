const Expense = require('../models/expense.model');

const expenseController = {};

expenseController.get = async (req, res, next) => {
  const { user } = req;

  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const query = {
    owner: user._id,
    created: {
        $gte: firstDay,
        $lt: lastDay
    }
  };

  try {
    const expense = await Expense.find(query);
    return res.send({
      expense
    });
  } catch (e) {
    next(e);
  }
};

expenseController.create = async (req, res, next) => {
  const { amount, description, created } = req.body;
  const newExpense = new Expense({
    amount,
    description,
    created,
    owner: req.user
  });

  try {
    const saved = await newExpense.save();
    return res.send({
      success: true,
      expense: saved
    });
  } catch (e) {
    next(e);
  }
};

expenseController.update = async (req, res, next) => {
  const expense_id = req.params.expense_id;
  const { amount, description, created } = req.body;

  try {
    const expense = await Expense.update(
      { _id: expense_id },
      { amount, description, created }
    );
    return res.send({
      success: true,
      expense
    });
  } catch (e) {
    next(e);
  }
};

expenseController.destroy = async (req, res, next) => {
  const expense_id = req.params.expense_id;

  try {
    await Expense.deleteOne({ _id: expense_id });
    res.send({
      success: true
    });
  } catch (e) {
    next(e);
  }
};

module.exports = expenseController;
