import dotenv from 'dotenv';
import Measurement from '../models/measurement.model';
import axios from 'axios';
import moment from 'moment';
import 'moment-timezone';

dotenv.config();
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

async function publishMeasurement(measurement: Measurement) {
  console.log('publishing from: ' + measurement.device);

  const data = JSON.stringify({
    ...measurement,
    measuredAt: moment.tz('Europe/Prague').format('yyyy-MM-DDTHH:mm:ss.SSS') + 'Z',
  });

  const config = {
    method: 'post',
    url: baseUrl + 'measurements',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': apiKey,
    },
    data: data,
  };

  return axios.request(config);
}

export { publishMeasurement };
