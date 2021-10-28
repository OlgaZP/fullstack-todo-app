const { Router } = require('express');
const { todoController } = require('./../controllers');

const todoRouter = Router();

todoRouter
  .route('/')
  .get(todoController.getTodos)
  .post(todoController.createTodo);

module.exports = todoRouter;
