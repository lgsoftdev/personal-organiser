import type { Todo } from '../model/todo.model';

const URL = 'http://localhost:3000';

export const getTodos = async (): Promise<Todo[]> => {
  const result = await fetch(`${URL}/todo`, { method: 'GET' });
  const jsonResult = await result.json();
  return jsonResult;
};
