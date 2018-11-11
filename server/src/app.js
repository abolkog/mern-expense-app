const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// ----------- DB Config -----------//
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
});
mongoose.connection.on('error', (err) => {
    console.error(`Failed to connected to the database: ${err}`);
});

// ----------- Middlewares -----------//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----------- Routes -----------//
app.post('/hello', (req, res) => {
    const name = req.body.name;
    res.send({
        message: `Welcome ${name}`
    })
});

module.exports = app;