import dotenv from 'dotenv';
const axios = require('axios');

dotenv.config();
const keycloakBaseUrl = process.env.KC_BASE_URL;
const clientId = process.env.KC_CLIENT_ID;
const clientSecret = process.env.KC_SECRET;

async function publishMeasurement() {
  console.log(keycloakBaseUrl);
  try {
    const response = await axios.post(
      `${keycloakBaseUrl}`,
      `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    );

    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}

module.exports = { publishMeasurement };
