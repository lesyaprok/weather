export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  description: string;
  windSpeed: number;
  icon: string;
  timezone: number;
}

export interface Weather {
  0: {
    main: string;
    icon: string;
  };
}

export interface Data {
  main: any;
  wind: any;
  weather: Weather;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface WeekWeatherData {
  temperature: Object,
  description: string,
  icon: string,
  timestamp: number,
  wind: number,
}

export interface HourlyWeatherData {
  timestamp: number, 
  temperature: number,
  icon: string,

}
