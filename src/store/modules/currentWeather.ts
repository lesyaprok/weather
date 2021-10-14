import { AxiosResponse } from "axios";
import { Commit } from "vuex";
import { getCurrentWeatherData } from '@/services/currentWeatherService';
import { State } from '@/services/types';

export const currentWeatherModule = {
  namespaced: true,
  state: {
    weatherData: [],
    cityName: 'London',
  },
  mutations: {
    SET_WEATHER_DATA(state: State, weatherData: Array<Object>) {
      state.weatherData = weatherData;
    },
    SET_CITY_NAME(state: State, cityName: String) {
      state.cityName = cityName;
    }
  },
  actions: {
    GET_CURRENT_WEATHER_DATA({ commit, state }: { commit: Commit, state: State }): any {
      try {
        return getCurrentWeatherData(state.cityName)
          .then((res: AxiosResponse) => {
            commit('SET_WEATHER_DATA', res.data);
            // console.log(res.data);
            return res.data;
          })
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getWeatherData(state: State) {
      return state.weatherData;
    },
    getCityName(state: State) {
      return state.cityName;
    }
  }
}