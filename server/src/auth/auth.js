const express = require('express');
const middleware = require('./auth.middleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('auth/ route is working');
});

router.post('/signup', middleware.validateUser, (req, res) => {
  res.status(200).send('User validation succeed');

  // eslint-disable-next-line no-console
  console.log(
    '************************User validation succeed********************************************'
  );
});
// router.post('/login', logIn);

module.exports = router;
