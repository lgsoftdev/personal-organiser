import { Router, json, Request, Response } from 'express';
import * as todoHandler from './todo.handler';

const todoRouter = Router();
todoRouter.use(json());

todoRouter.get('/', todoHandler.getAllTodo);

todoRouter.get('/:id', todoHandler.getTodoById);

todoRouter.post('/', todoHandler.addTodo);

todoRouter.delete('/:id', todoHandler.removeTodo);

export default todoRouter;
