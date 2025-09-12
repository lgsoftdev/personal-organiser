import express from 'express';
import cors from 'cors';
import todoRouter from './api/todo/todo.route';

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.use(cors());

    this.app.use('/todo', todoRouter);

    this.app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}.`);
    });
  }
}

new Server().startServer();
