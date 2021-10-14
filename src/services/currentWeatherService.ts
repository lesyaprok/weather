import axios from "axios";
import constants from './constants';

const API_KEY = constants.API_KEY;

const instance = axios.create({
  baseURL: `${constants.BASE_URL}/data/2.5/`,
  headers: {
    accept: 'application/json',
  },
})

export function getCurrentWeatherData(cityName: String){
  return instance.get(`weather?q=${cityName}&units=metric&appid=${API_KEY}`);
}
