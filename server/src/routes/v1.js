const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users.controller');

// Auth and Sign Up
router.post('/register', userController.regisetr);
router.post('/auth', userController.login);

router.get('/test', passport.authenticate('jwt', { session: false }) ,(req, res, next) => {
    return res.send({ message: 'hi, you are authenticated '});
});

module.exports = router;