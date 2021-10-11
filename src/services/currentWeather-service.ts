import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://api.openweathermap.org";
const API_KEY = "7628b84858689e70d784fa009f97eea5";
const cityName = 'London';
const response = (res: AxiosResponse) => res.data;

export function getCurrentWeatherData():Promise<Object>{
  return axios.get(`${BASE_URL}/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`).then(response);
}
