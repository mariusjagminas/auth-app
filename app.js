const express = require('express');
const app = express();
const volleyball = require('volleyball');

app.use(volleyball);

app.get('/', (req, res) => {
  res.send('server is working');
});

module.exports = app