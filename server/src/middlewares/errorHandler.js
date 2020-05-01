// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode ? res.statusCode : 500);
  res.json({
    message: err.message,
  });
};

module.exports = errorHandler;
