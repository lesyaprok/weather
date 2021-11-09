import Vue from 'vue';
import Vuex from 'vuex';
import currentWeatherModule from './modules/currentWeather';
import weekForecastModule from './modules/weekForecast';
import hourlyForecastModule from './modules/hourlyForecast';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    currentWeatherModule,
    weekForecastModule,
    hourlyForecastModule,
  },
});

export default store;
