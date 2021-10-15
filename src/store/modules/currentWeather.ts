import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import getCurrentWeatherData from '../../services/currentWeatherService';
import { State } from '../../services/types';

const currentWeatherModule = {
  namespaced: true,
  state: {
    weatherData: [],
    cityName: 'London',
  },
  mutations: {
    setWeatherData(state: State, weatherData: Array<Object>): void {
      state.weatherData = weatherData;
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
            commit('setWeatherData', res.data);
            // should return nothing, fix it later
            return res.data;
          });
      } catch (error) {
        console.log(error);
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
