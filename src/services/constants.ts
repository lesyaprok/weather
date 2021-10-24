import dotenv from 'dotenv';

dotenv.config();

const constants = {
  BASE_URL: 'https://api.openweathermap.org',
  API_KEY: process.env.VUE_APP_API_KEY,
  BASE_URL_GEO: 'https://api.opencagedata.com',
  API_KEY_GEO: process.env.VUE_APP_API_KEY_GEO,
};

export default constants;
