'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
console.log('we are working');

// design principle: singleton
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use('*', notFound);



app.listen(3002);
