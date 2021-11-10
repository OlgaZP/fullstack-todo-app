const _ = require('lodash');
const createError = require('http-errors');
const { Todo } = require('./../models');

module.exports.getTodos = async (req, res, next) => {
  const {
    pagination: { limit, offset },
    priority,
  } = req;
  // console.log(`limit from getTodos controller`, limit);
  // console.log(`offset from getTodos controller`, offset);
  // console.log(`priority from getTodos controller`, priority);
  try {
    const queryObject = {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      limit,
      offset,
    };

    if (priority !== 'all') {
      queryObject.where = { priority: priority };
    }

    const foundTodos = await Todo.findAll(queryObject);

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
    if (deletedTodosCount) {
      return res.status(200).send({ data: deletedTodo });
    }

    next(createError(404, 'Todo not found'));
  } catch (err) {
    next(err);
  }
};

module.exports.updateTodo = async (req, res, next) => {
  console.log(`into update todo controller`);
  const {
    params: { todoId },
    body,
  } = req;

  try {
    const [updatedCount, [updatedTodo]] = await Todo.update(body, {
      where: { id: todoId },
      returning: true,
    });

    if (updatedCount > 0) {
      const preparedTodo = _.omit(updatedTodo.get(), [
        'createdAt',
        'updatedAt',
      ]);
      return res.status(201).send({ data: preparedTodo });
    }
    next(createError(404, 'Todo not found'));
  } catch (err) {
    next(err);
  }
};
