const createError = require('http-errors');
var isBefore = require('date-fns/isBefore');
var parseISO = require('date-fns/parseISO');

const { NEW_TODO_VALIDATION_SCHEMA } = require('../utils/validationSchemas');

module.exports.validateNewTodo = async (req, res, next) => {
  const { body } = req;

  if (await NEW_TODO_VALIDATION_SCHEMA.isValid(body)) {
    return next();
  }

  if (isBefore(parseISO(req.body.date), Date.now())) {
    return next(createError(401, "You can't create todo on a past"));
  }

  next(createError(422, 'Validation Error! Check fields!'));
};
