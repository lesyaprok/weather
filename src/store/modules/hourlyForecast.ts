import { Commit } from 'vuex';
import { Coordinates, HourlyWeatherData } from '../../services/types';
import getForecast from '../../services/forecastService';

interface State{
  hourlyData: HourlyWeatherData
}

const hourlyForecastModule = {
  namespaced: true,
  state: {
    hourlyData: {},
  },
  mutations: {
    setHourlyData(state: State, hourlyData: HourlyWeatherData): void {
      state.hourlyData = hourlyData;
    },
  },
  actions: {
    provideHourlyForecastData({ commit }: { commit: Commit }, payload: Coordinates): Promise<void> {
      return getForecast(payload.latitude, payload.longitude)
        .then((res) => {
          const responseData: any = res.data;
          const hourlyData: HourlyWeatherData = responseData.hourly.map((e: any) => ({
              timestamp: e.dt,
              temperature: e.temp,
              icon: e.weather[0].icon,
            }));
          commit('setHourlyData', hourlyData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getHourlyData(state: State): HourlyWeatherData {
      return state.hourlyData;
    },
  },
};

export default hourlyForecastModule;
