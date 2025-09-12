import sqlite3 from 'sqlite3';

export interface DynamicObject {
  [key: string]: any;
}

class Database {
  private db;
  constructor(dbFilePath: string) {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err) {
        console.error('Could not connect to database:', err.message);
      } else {
        console.log('Connected to SQLite database at', dbFilePath);
      }
    });
  }

  // Method to run a SQL query that doesn't return data (e.g., INSERT, UPDATE, DELETE)
  run(sql: string, params: DynamicObject) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, Object.values(params), (err: Error, row: any) => {
        if (err) {
          console.error('Error running SQL:', err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Method to get a single row of data
  get(sql: string, params: DynamicObject) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, Object.values(params), (err, row) => {
        if (err) {
          console.error('Error running SQL:', err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Method to get all rows of data
  all(sql: string, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.error('Error running SQL:', err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Method to close the database connection
  close() {
    return new Promise<void>((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          console.error('Error closing database:', err.message);
          reject(err);
        } else {
          console.log('Database connection closed.');
          resolve();
        }
      });
    });
  }
}

export default Database;
