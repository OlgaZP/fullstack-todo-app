const { Router } = require('express');
const { TodoController } = require();

const todoRouter = Router();

todoRouter.get('/', todoController.getTodos);

module.exports = todoRouter;
