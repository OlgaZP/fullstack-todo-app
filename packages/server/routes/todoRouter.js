const { Router } = require('express');
const { todoController } = require('./../controllers');
const { validate } = require('../middleware');

const todoRouter = Router();

todoRouter
  .route('/')
  .get(todoController.getTodos)
  .post(validate.validateNewTodo, todoController.createTodo);

todoRouter
  .route('/:todoId')
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = todoRouter;
