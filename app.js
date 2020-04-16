const express = require('express');
const app = express();
const volleyball = require('volleyball');

const auth = require('./auth/auth');

app.use(volleyball);
app.use(express.json());

app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send('server is working');
});

module.exports = app