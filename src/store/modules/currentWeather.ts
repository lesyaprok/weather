import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { Data, WeatherData } from '../../services/types';
import getCurrentWeatherData from '../../services/currentWeatherService';

export interface State {
  weatherData: WeatherData | null,
  cityName: String,
}

const currentWeatherModule = {
  namespaced: true,
  state: {
    weatherData: null,
    cityName: 'Hrodna',
  } as State,
  mutations: {
    setWeatherData(state: State, weatherData: WeatherData): void {
      state.weatherData = weatherData;
    },
    setCityName(state: State, cityName: String): void {
      state.cityName = cityName;
    },
  },
  actions: {
    provideCurrentWeatherData({ commit, state }: { commit: Commit, state: State })
      : Promise<void> | undefined {
      return getCurrentWeatherData(state.cityName)
        .then((res: AxiosResponse) => {
          const responseData: Data = res.data;
          const weatherData: WeatherData = {
            temperature: responseData.main.temp,
            feelsLike: responseData.main.feels_like,
            humidity: responseData.main.humidity,
            windSpeed: responseData.wind.speed,
            description: responseData.weather[0].main,
          };
          commit('setWeatherData', weatherData);
        }).catch(err => {
          console.log(err);
        })
    },
  },
  getters: {
    getWeatherData(state: State): WeatherData | null {
      return state.weatherData;
    },
    getCityName(state: State): String {
      return state.cityName;
    },
  },
};

export default currentWeatherModule;
