import Database, { DynamicObject } from '../../data/database';
import { Todo, TodoInsert } from './todo.model';

const connectDb = () => {
  const db = new Database('./src/data/personal-organiser.db');
  return db;
};

export const getTodoTableRows = () => {
  const db = connectDb();
  const sql = `
    SELECT * FROM todo;
  `;
  const rows = db.all(sql) as Promise<Todo[]>;
  db.close();
  return rows;
};

export const getTodoTableRowById = (id: number) => {
  const db = connectDb();
  const sql = `
    SELECT * FROM todo
    WHERE id = ?;
  `;
  const row = db.get(sql, { id }) as Promise<Todo>;
  db.close();
  return row;
};

export const insertTodo = (todo: TodoInsert) => {
  const db = connectDb();
  const sql = `
    INSERT INTO todo (description, prioritylevel, datedue)
    VALUES (?, ?, ?)
    RETURNING id;
    `;
  //db.get is used iso db.run in order to retrieve the result
  const row = db.get(sql, todo) as Promise<DynamicObject>;
  db.close();
  return row;
};

export const deleteTodo = (id: number) => {
  const db = connectDb();
  const sql = `
    DELETE FROM todo
    WHERE id = ?;
  `;
  const row = db.run(sql, { id }) as Promise<Todo>;
  db.close();
  return row;
};
