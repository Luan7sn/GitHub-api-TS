import helmet from 'helmet';
import 'reflect-metadata';
//import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
//import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
/* import AppError from '@shared/errors/AppError'; */
import AppError from '../../errors/AppError'
import routes from './routes';
//import '@shared/container'
import '../../container'
import 'module-alias/register';

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error!"',
  });
});

const port = 3333

app.listen(process.env.PORT || port, () => {
  console.log(` Server started on port ${port}!`);
});
