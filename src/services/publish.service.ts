import dotenv from 'dotenv';
import Measurement from '../models/measurement.model';
import axios from 'axios';
import moment from 'moment';

dotenv.config();
const baseUrl = process.env.BASE_URL;

async function publishMeasurement(measurement: Measurement) {
  console.log('publishing from: ' + measurement.device);
  const data = JSON.stringify({
    ...measurement,
    measuredAt: moment().toISOString(),
  });

  const config = {
    method: 'post',
    url: baseUrl + 'measurements',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios.request(config);
}

export { publishMeasurement };
