import dotenv from 'dotenv';

dotenv.config();

const constants = {
  BASE_URL: 'https://api.openweathermap.org',
  API_KEY: process.env.VUE_APP_API_KEY,
};

export default constants;
