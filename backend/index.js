import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./src/data/personal-organiser.db');

// const createPriorityTableSql = `
//   CREATE TABLE IF NOT EXISTS priority (
//       level INTEGER PRIMARY KEY,
//       description TEXT NOT NULL
//   );
//   `;

// db.run(createPriorityTableSql, (err) => {
//   if (err) {
//     console.error('Error creating table:', err.message);
//   } else {
//     console.log('Table "priority" created or already exists.');
//   }
// });

// const insertPriorityTableSql = `
//     INSERT INTO priority (level, description)
//     VALUES (1, 'High'),
//           (2, 'Medium'),
//           (3, 'Low');
//     `;

// db.run(insertPriorityTableSql, (err) => {
//   if (err) {
//     console.error('Error creating table:', err.message);
//   } else {
//     console.log('Rows inserted into priority table');
//   }
// });

const createTodoTableSql = `
  CREATE TABLE IF NOT EXISTS todo (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL,
      prioritylevel INTEGER NOT NULL,
      datedue TEXT,
      isdone TEXT DEFAULT 'N',
      datecreated TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (prioritylevel) REFERENCES priority(level)
  );
  `;

db.run(createTodoTableSql, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table "todo" created or already exists.');
  }
});
