import type { TodoItem } from '../model/todo.model';

const URL = 'http://localhost:3000';

export const getTodos = async (): Promise<TodoItem[]> => {
  const result = await fetch(`${URL}/todo`, { method: 'GET' });
  const jsonResult = await result.json();
  return jsonResult;
};
