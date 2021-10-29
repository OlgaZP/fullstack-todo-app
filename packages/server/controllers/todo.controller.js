const _ = require('lodash');
const createError = require('http-errors');
const { Todo } = require('./../models');

module.exports.getTodos = async (req, res, next) => {
  try {
    const foundTodos = await Todo.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
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

    const preparedTodo = _.omit(createdTodo.get(), ['createdAt', 'updatedAt']);
    res.status(201).send({ data: preparedTodo });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  console.log(`into deleteTodo function`);

  const {
    params: { todoId },
  } = req;

  try {
    const deletedTodo = await Todo.findOne({
      raw: true,
      where: { id: todoId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    const deletedTodosCount = await Todo.destroy({ where: { id: todoId } });

    if (deletedTodosCount > 0) {
      return res.status(200).send(deletedTodo);
    }
    res.status(404).send('Phone not found');
  } catch (err) {
    next(err);
  }
};

module.exports.updateTodo = (req, res, mext) => {
  console.log(`into update todo controller`);
};
