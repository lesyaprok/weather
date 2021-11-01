export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  description: string;
  windSpeed: number;
  icon: string;
  timezone: string;
}

export interface Weather {
  description: string;
  icon: string;
}

export interface Icon {
  icon: string;
}

export interface Temperature {
  day: number;
  night: number;
}

export interface Current {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  weather: Weather[];
}

export interface Hourly {
  dt: number;
  temp: number;
  weather: Icon[];
}

export interface Daily {
  dt: number;
  temp: Temperature;
  weather: Weather[];
  wind_speed: number;
}

export interface ResponseWeatherData {
  current: Current;
  timezone: string;
  hourly: Hourly[];
  daily: Daily[];
}

export interface Results {
  geometry: {
    lat: number;
    lng: number;
  };
  components: {
    city: string;
  };
}

export interface ResponseGeoData {
  results: Results[];
}

export interface WeekWeatherData {
  temperature: Temperature;
  description: string;
  icon: string;
  timestamp: number;
  wind: number;
}

export interface HourlyWeatherData {
  timestamp: number;
  temperature: number;
  icon: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
