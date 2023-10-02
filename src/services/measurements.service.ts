import Measurement from '../models/measurement.model';

const axios = require('axios');

async function fetchMeasurement(deviceAddress: string): Promise<Measurement | undefined> {
  try {
    const response: Measurement = await axios.get(`${deviceAddress}/measurement`);
    console.log('Measurement:', response);
    return response;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}
