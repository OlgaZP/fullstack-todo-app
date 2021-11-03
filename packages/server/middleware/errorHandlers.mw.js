const {
  Sequelize: { BaseError },
} = require('./../models');

const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res
      .status(422)
      .send({ errors: [{ title: 'Validation Error', details: err.errors }] });
  }
  next(err);
};

module.exports.sequelizaErrorHandler = (err, req, res, next) => {
  if (err instanceof BaseError) {
    return res
      .status(422)
      .send({ errors: [{ title: 'Sequelize Error', details: err.errors }] });
  }
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res
    .status(err?.status ?? 500)
    .send({ errors: [{ title: err?.message ?? 'Internal server error' }] });
};
