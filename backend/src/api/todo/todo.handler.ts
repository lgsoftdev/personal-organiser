import { Request, Response, NextFunction } from 'express';
import { TodoInsert } from './todo.model';
import {
  deleteTodo,
  getTodoTableRowById,
  getTodoTableRows,
  insertTodo,
} from './todo-data-access';

export const getAllTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getTodoTableRows();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (
  req: Request<{ id: number }>,
  res: Response,
  next: NextFunction
) => {
  res;
  const result = await getTodoTableRowById(req.params.id);
  res.json(result);
};

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

export const removeTodo = async (
  req: Request<{ id: number }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteTodo(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
