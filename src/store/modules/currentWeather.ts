import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { Data, State } from '../../services/types';
import getCurrentWeatherData from '../../services/currentWeatherService';

const currentWeatherModule = {
  namespaced: true,
  state: {
    weatherData: [],
    cityName: 'London',
  },
  mutations: {
    setWeatherData(state: State, weatherData: Array<Object>): void {
      state.weatherData = weatherData;
      console.log(weatherData);
    },
    setCityName(state: State, cityName: String): void {
      state.cityName = cityName;
    },
  },
  actions: {
    provideCurrentWeatherData({ commit, state }: { commit: Commit, state: State })
      : Promise<void> | undefined {
      try {
        return getCurrentWeatherData(state.cityName)
          .then((res: AxiosResponse) => {
            const { data } = res;
            const payload: = {
              temperature: data.main.temp,
              feelsLike: data.main.feels_like,
              humidity: data.main.humidity,
              windSpeed: data.wind.speed,
              description: data.weather[0].main,
            };
            commit('setWeatherData', payload);
          });
      } catch (err) {
        throw new Error('err');
      }
    },
  },
  getters: {
    getWeatherData(state: State): Object[] {
      return state.weatherData;
    },
    getCityName(state: State): String {
      return state.cityName;
    },
  },
};

export default currentWeatherModule;
