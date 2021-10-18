import { AxiosResponse } from 'axios';
import commonService from './commonService';

export default function getCurrentWeatherData(cityName: String): Promise<AxiosResponse> {
  return commonService.get(`weather?q=${cityName}`);
}
