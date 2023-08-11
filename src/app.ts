import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { IResponseError } from 'interfaces';

import notesRouter from './routes/api/notes';

dotenv.config({ path: __dirname + '/.env' });

const newApp = express();

const formatsLogger = newApp.get('env') === 'development' ? 'dev' : 'short';

newApp.use(morgan(formatsLogger));
newApp.use(cors());
newApp.use(express.json());

newApp.use('/api/notes', notesRouter);

newApp.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

newApp.use(
  (err: IResponseError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.code ?? 500).json(err.message ?? 'server error');
  }
);

module.exports = newApp;
