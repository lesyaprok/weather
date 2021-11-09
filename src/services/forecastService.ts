import { AxiosResponse } from 'axios';
import commonService from './commonService';

export default function getForecast(latitude: number, longitude: number): Promise<AxiosResponse> {
  return commonService.get(`onecall?lat=${latitude}&lon=${longitude}`);
}
