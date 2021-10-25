import Vue from 'vue';
import Vuex from 'vuex';
import currentWeatherModule from './modules/currentWeather';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    currentWeatherModule,
  },
});

export default store;
