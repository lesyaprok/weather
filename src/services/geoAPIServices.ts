import { AxiosResponse } from 'axios';
import commonGeoService from './commonGeoService';

export function getGeoData(cityName: String): Promise<AxiosResponse> {
  return commonGeoService.get(`?q=${cityName}`);
}

export function getCityNameFromCoordinates(
  latitude: number,
  longitude: number,
): Promise<AxiosResponse> {
  return commonGeoService.get(`?q=${latitude},${longitude}`);
}
