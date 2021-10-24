import axios, { AxiosInstance } from 'axios';
import constants from './constants';

const { API_KEY_GEO } = constants;

const commonGeoService: AxiosInstance = axios.create({
  baseURL: `${constants.BASE_URL_GEO}/geocode/v1/json`,
  headers: {
    accept: 'application/json',
  },
  params: {
    key: API_KEY_GEO,
    language: 'en',
  },
});

export default commonGeoService;
