const express = require('express');

const app = express();

const kittens = require('./kittens');

app.use('/kittens', kittens);

module.exports = app;
