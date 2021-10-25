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
  main: string;
  icon: string;
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
  weather: [
    {
      icon: string;
    }
  ];
}

export interface Daily {
  dt: number;
  temp: {
    day: number;
    night: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
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
  temperature: {
    day: number;
    night: number;
  };
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
