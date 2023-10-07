import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import moment from 'moment';

import { publishMeasurement } from './src/services/publish.service';
import { validateMeasurement } from './src/services/validator.service';

dotenv.config();

const app: Express = express();
const jsonParser = bodyParser.json();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  const start = moment().toISOString();
  res.send(`Relay running ${start}`);
});

app.post('/', jsonParser, (req: Request, res: Response) => {
  const measurement = req.body;
  console.log(measurement);
  if (!validateMeasurement(measurement)) {
    res.status(422).json({ error: `Invalid input`, data: measurement });
    return;
  }
  publishMeasurement(measurement)
    .then(() => {
      res.json('Measurement sent');
    })
    .catch((error: Error) => {
      res.status(500).json({ error: 'Main server error', data: error.message });
    });
});

app.listen(port, () => {
  const start = moment().toISOString();
  console.log(`[server]: Server is running at http://localhost:${port} as ${start}`);
});
