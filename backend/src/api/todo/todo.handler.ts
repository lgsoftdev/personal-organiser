import { Request, Response, NextFunction } from 'express';
import { TodoInsert } from './todo.model';
import { insertTodo } from './todo-data-access';

export const addTodo = async (
  req: Request<{}, {}, TodoInsert>,
  res: Response,
  next: NextFunction
) => {
  try {
    const objectWithId = await insertTodo(req.body);
    res.json(objectWithId);
  } catch (error) {
    next(error);
  }
};
