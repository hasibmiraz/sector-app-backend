exports.sendError = (res, error, msg, statusCode = 401) =>
  res.status(statusCode).json({ success: error, message: msg });

exports.handleNotFound = (req, res) => this.sendError(res, 'Not found', 404);

exports.errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message || err });
  console.log(err.message || err);
};
