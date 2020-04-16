const express = require('express');
const router = express.Router();

const signUp = require("./auth.signUp");
const logIn = require("./auth.logIn");

router.post('/signin', signUp);
router.post('/login', logIn);

module.exports = router;