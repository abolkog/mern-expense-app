const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');

const userController = require('../controllers/users.controller');
const expenseController = require('../controllers/expense.controller');

// Multer Configurations
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public');
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, '-')}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage }).single('receipt');

// Auth and Sign Up
router.post('/register', userController.regisetr);
router.post('/auth', userController.login);

// Customize auth message Protect the  routes
router.all('*', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      const error = new Error('You are not authorized to access this area');
      error.status = 401;
      throw error;
    }

    //
    req.user = user;
    return next();
  })(req, res, next);
});

// -------------- Protected Routes -------------- //
router.get('/me', userController.me);
router.get('/expense/:month?', expenseController.get);
router.post('/expense', upload, expenseController.create);
router.put('/expense/:expense_id', expenseController.update);
router.delete('/expense/:expense_id', expenseController.destroy);

module.exports = router;
