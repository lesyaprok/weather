import { AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { Coordinates, HourlyWeatherData, ResponseWeatherData } from '../../services/types';
import getForecast from '../../services/forecastService';

interface State{
  hourlyData: HourlyWeatherData | null;
}

const hourlyForecastModule = {
  namespaced: true,
  state: {
    hourlyData: null,
  } as State,
  mutations: {
    setHourlyData(state: State, hourlyData: HourlyWeatherData): void {
      state.hourlyData = hourlyData;
    },
  },
  actions: {
    provideHourlyForecastData({ commit }: { commit: Commit }, payload: Coordinates): Promise<void> {
      return getForecast(payload.latitude, payload.longitude)
        .then((res: AxiosResponse) => {
          const responseData: ResponseWeatherData = res.data;
          const hourlyData: HourlyWeatherData[] = responseData.hourly.map((e) => ({
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
    getHourlyData(state: State): HourlyWeatherData | null {
      return state.hourlyData;
    },
  },
};

export default hourlyForecastModule;
