import axios, { AxiosInstance } from "axios";
import constants from './constants';

const API_KEY = constants.API_KEY;

const commonService: AxiosInstance = axios.create({
  baseURL: `${constants.BASE_URL}/data/2.5/`,
  headers: {
    accept: 'application/json',
  },
  params: {
    appid: API_KEY,
    units: 'metric',
  }
});

export default commonService;