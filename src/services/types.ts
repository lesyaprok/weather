export interface WeatherData {
  temperature: number,
  feelsLike: number,
  humidity: number,
  description: string,
  windSpeed: number,
  main: string,
  time: string
}

export interface Data {
  main: WeatherData,
  wind: WeatherData,
  weather: Array<WeatherData>,
}

export interface State {
  weatherData: Array<Object>,
  cityName: String,
}