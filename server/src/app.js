const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

const v1 = require('./routes/v1');

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

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// ----------- Routes -----------//
app.use('/api/v1', v1);


// ----------- ERRORS -----------//

app.use((req, res, next) => { //404 Not Found
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const error = err.message || 'Error processing your request';

    res.status(status).send({
        error
    })
});




module.exports = app;