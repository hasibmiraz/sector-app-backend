exports.sendError = (res, error, statusCode = 401) =>
  res.status(statusCode).json({ error });

exports.handleNotFound = (req, res) => this.sendError(res, 'Not found', 404);

exports.errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message || err });
  console.log(err.message || err);
};
