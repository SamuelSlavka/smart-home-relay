import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const publish = require('./src/services/publish.service');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  publish.publishMeasurement();
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
