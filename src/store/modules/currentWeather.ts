import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { getGeoData, getCityNameFromCoordinates } from '../../services/geoAPIServices';
import { WeatherData, Coordinates } from '../../services/types';
import getForecast from '../../services/forecastService';

export interface State {
  weatherData: WeatherData,
  cityName: String,
  searchedCity: String,
  latitude: number,
  longitude: number,
}

const currentWeatherModule = {
  namespaced: true,
  state: {
    weatherData: [],
    cityName: '',
    searchedCity: '',
    latitude: 0,
    longitude: 0,
  },
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
          const responseData: any = res.data;
          const cityName = responseData.results[0].components.city || '';
          commit('setCityName', cityName);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCoordinatesOfCity({ commit, state }: { commit: Commit, state: State }): Promise<void> {
      return getGeoData(state.searchedCity)
        .then((res) => {
          const responseData: any = res.data;
          const coordinates: Coordinates = {
            latitude: responseData.results[0].geometry.lat,
            longitude: responseData.results[0].geometry.lng,
          };
          commit('setCoordinates', coordinates);
          commit('setCityName', responseData.results[0].components.city);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    provideCurrentWeatherData({ commit, state }: { commit: Commit, state: State })
      : Promise<void> | undefined {
        return getForecast(state.latitude, state.longitude)
          .then((res: AxiosResponse) => {
            const responseData: any = res.data;
            const weatherData: WeatherData = {
              temperature: responseData.current.temp,
              feelsLike: responseData.current.feels_like,
              humidity: responseData.current.humidity,
              windSpeed: responseData.current.wind_speed,
              description: responseData.current.weather[0].main,
              icon: responseData.current.weather[0].icon,
              timezone: responseData.timezone,
            };
            commit('setWeatherData', weatherData);
          })
          .catch((err) => {
            // throw new Error('err');
            console.log(err);
          });
    },
  },
  getters: {
    getWeatherData(state: State): WeatherData {
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
