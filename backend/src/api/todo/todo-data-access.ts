import Database, { DynamicObject } from '../../data/database';
import { TodoInsert } from './todo.model';

const connectDb = () => {
  const db = new Database('./src/data/personal-organiser.db');
  return db;
};

export const insertTodo = (todo: TodoInsert) => {
  const db = connectDb();
  const sql = `
    INSERT INTO todo (description, prioritylevel, datedue)
    VALUES (?, ?, ?)
    RETURNING id;
    `;
  //db.get is used iso db.run in order to retrieve the result
  const rowId = db.get(sql, todo) as Promise<DynamicObject>;
  db.close();
  return rowId;
};
