const express = require('express');
const logIn = require('./auth.logIn');
const signUp = require('./auth.signUp');

const router = express.Router();

router.post('/', (req, res) => {
  res.send("route './auth' is accesible");
});

router.post('/signin', signUp);
router.post('/login', logIn);

module.exports = router;
