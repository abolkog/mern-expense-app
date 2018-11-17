const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

// Auth and Sign Up
router.post('/register', userController.regisetr);


module.exports = router;