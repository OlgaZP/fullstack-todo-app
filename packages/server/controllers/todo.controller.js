const _ = require('lodash');
const createError = require('http-errors');
const { Todo } = require('./../models');

module.exports.getTodos = async (req, res, next) => {
  try {
    const foundTodos = await Todo.findAll({
      raw: true,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt'],
      },
    });
    res.status(200).send({ data: foundTodos });
  } catch (err) {
    next(err);
  }
};

module.exports.getTodoById = async (req, res, next) => {
  console.log(`In getTodoById function`);
};

module.exports.createTodo = async (req, res, next) => {
  console.log(`In createTodo function`);
  const { body } = req;

  try {
    const createdTodo = await Todo.create(body);

    const preparedTodo = _.omit(createdTodo.get(), [
      'id',
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedTodo });
  } catch (err) {
    next(err);
  }
};
