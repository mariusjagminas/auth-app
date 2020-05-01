const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
  });
  next();
};

module.exports = errorHandler;
