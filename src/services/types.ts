export interface WeatherData {
  temperature: number,
  feelsLike: number,
  humidity: number,
  description: string,
  windSpeed: number,
  // main: string,
  time: string,
}

export interface Main {
  temp: number,
  feels_like: number,
  humidity: number,
}

export interface Wind {
  speed: number,
}

export interface Description {
  main: string,
}

export interface Weather {
  0: Description,
}

export interface Data {
  main: Main,
  wind: Wind,
  weather: Weather,
}

export interface State {
  weatherData: Array<Object>,
  cityName: String,
}
