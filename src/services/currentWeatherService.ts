import commonService from "./commonService";

export function getCurrentWeatherData(cityName: String) {
  return commonService.get(`weather?q=${cityName}`);
}
