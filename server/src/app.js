const express = require('express');
const volleyball = require('volleyball');

require('dotenv').config();

const auth = require('./auth/auth');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const app = express();

app.use(volleyball);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/auth', auth);

app.use(errorHandler);
app.use(notFound);

module.exports = app;

// const db = require('./db/conection');

// db.then(() => {
//   // eslint-disable-next-line no-console
//   console.log(
//     '************** Conection with MongoDB Atlas has been established****************'
//   );
// });
