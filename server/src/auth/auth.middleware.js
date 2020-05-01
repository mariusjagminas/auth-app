const Joi = require('@hapi/joi');

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

module.exports = {
  validateUser,
};
