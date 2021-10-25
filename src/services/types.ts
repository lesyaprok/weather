export interface WeatherData {
  temperature: number,
  feelsLike: number,
  humidity: number,
  description: string,
  windSpeed: number,
}

export interface Main {
  temp: number,
  feels_like: number,
  humidity: number,
}

export interface Wind {
  speed: number,
}

export interface Weather {
  0: {
    main: string,
    icon: string
  }
}

export interface Data {
  main: Main,
  wind: Wind,
  weather: Weather,
}
