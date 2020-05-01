const Joi = require('@hapi/joi');
const db = require('../db/conection');

const usersCollection = db.get('users');

const schema = Joi.object({
  user: Joi.string().min(5).max(20).alphanum().required(),
  password: Joi.string()
    .min(8)
    .max(15)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

const validateUser = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(422);
    const err = new Error(error.message);
    next(err);
  } else {
    next();
  }
};

const checIfUserUnique = async (req, res, next) => {
  try {
    const user = await usersCollection.findOne({ user: req.body.user });
    if (user) {
      res.status(422);
      const err = new Error('Username is already exist');
      next(err);
    } else {
      next();
    }
  } catch (err) {
    res.status(504);
    next(err);
  }
};

module.exports = {
  validateUser,
  checIfUserUnique,
};
