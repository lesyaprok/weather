import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { getGeoData, getCityNameFromCoordinates } from '../../services/geoAPIServices';
import { WeatherData, Coordinates, ResponseWeatherData, ResponseGeoData, Current } from '../../services/types';
import getForecast from '../../services/forecastService';

export interface State {
  weatherData: WeatherData | null;
  cityName: String;
  searchedCity: String;
  latitude: number;
  longitude: number;
}

const currentWeatherModule = {
  namespaced: true,
  state: {
    weatherData: null,
    cityName: '',
    searchedCity: '',
    latitude: 0,
    longitude: 0,
  } as State,
  mutations: {
    setWeatherData(state: State, weatherData: WeatherData): void {
      state.weatherData = weatherData;
    },
    setCityName(state: State, cityName: String): void {
      state.cityName = cityName;
    },
    setSearchedCity(state: State, searchedCity: String): void {
      state.searchedCity = searchedCity;
    },
    setUserCoordinates(state: State, coords: Coordinates): void {
      state.latitude = coords.latitude;
      state.longitude = coords.longitude;
    },
    setCoordinates(state: State, coordinates: Coordinates): void {
      state.latitude = coordinates.latitude;
      state.longitude = coordinates.longitude;
    },
  },
  actions: {
    getUserLocation({ commit, state }: { commit: Commit, state: State }): Promise<void> {
      return getCityNameFromCoordinates(state.latitude, state.longitude)
        .then((res: AxiosResponse) => {
          const responseData: ResponseGeoData = res.data;
          const cityName: string = responseData.results[0].components.city || '';
          commit('setCityName', cityName);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCoordinatesOfCity({ commit, state }: { commit: Commit, state: State }): Promise<void> {
      return getGeoData(state.searchedCity)
        .then((res: AxiosResponse) => {
          const responseData: ResponseGeoData = res.data;
          const coordinates: Coordinates = {
            latitude: responseData.results[0].geometry.lat,
            longitude: responseData.results[0].geometry.lng,
          };
          const cityName: string = responseData.results[0].components.city;
          commit('setCoordinates', coordinates);
          commit('setCityName', cityName);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    provideCurrentWeatherData({ commit, state }: { commit: Commit, state: State })
      : Promise<void> | undefined {
      return getForecast(state.latitude, state.longitude)
        .then((res: AxiosResponse) => {
          const responseData: ResponseWeatherData = res.data;
          const { current, timezone }: {current: Current, timezone: string} = responseData;
          const weatherData: WeatherData = {
            temperature: current.temp,
            feelsLike: current.feels_like,
            humidity: current.humidity,
            windSpeed: current.wind_speed,
            description: current.weather[0].description,
            icon: current.weather[0].icon,
            timezone: timezone,
          };
          commit('setWeatherData', weatherData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getWeatherData(state: State): WeatherData | null {
      return state.weatherData;
    },
    getCityName(state: State): String {
      return state.cityName;
    },
    getCoordinates(state: State): Coordinates {
      return {
        latitude: state.latitude,
        longitude: state.longitude,
      };
    },
  },
};

export default currentWeatherModule;
