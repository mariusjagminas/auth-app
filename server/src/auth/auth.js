const express = require('express');

const middleware = require('./auth.middleware');
const controllers = require('./auth.controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('auth/ route is working');
});

router.post(
  '/signup',
  middleware.validateUser,
  middleware.checIfUserUnique,
  controllers.addUserToDB
);

module.exports = router;
