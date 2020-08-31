const express = require('express');
const api = require('./routes/api');
const mongoose = require('mongoose');
const connectionObject = require("./config/mongoConfig");
const response = require('./helpers/response');
const { errors } = require('./config/errors');


const app = express();

mongoose.connect(connectionObject.MONGO_DB_URI, connectionObject.MONGO_DB_CONNECTION_OPTIONS);

app.use('/api', api);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    const err = errors.not_found;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500).send(response.failure(err));
});

module.exports = app;
