const express = require('express');
const volleyball = require('volleyball');

const auth = require('./auth/auth');

const app = express();

app.use(volleyball);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/auth', auth);

const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
  });
  next();
};

const notFound = (req, res) => {
  res.status(404).send('Not found');
};

app.use(errorHandler);
app.use(notFound);

module.exports = app;
