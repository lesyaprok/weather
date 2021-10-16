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
            const payload = Object.fromEntries(Object.entries(res.data).filter(([key, value]) => (
              key === 'main' || key === 'weather' || key === 'wind' ? [key, value] : false
            )));
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
