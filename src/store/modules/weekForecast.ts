import { Commit } from 'vuex';
import getForecast from '../../services/forecastService';
import { Coordinates, WeekWeatherData } from '../../services/types';

interface State {
  latitude: number,
  longitude: number,
  weekWeatherData: WeekWeatherData,
}

const weekForecastModule = {
  namespaced: true,
  state: {
    latitude: 53.6772608,
    longitude: 23.83872,
    weekWeatherData: [],
  },
  mutations: {
    setWeekWeatherData(state: State, weekWeatherData: WeekWeatherData): void {
      state.weekWeatherData = weekWeatherData;
    },
  },
  actions: {
    provideWeekForecastData({ commit }: { commit: Commit }, payload: Coordinates): Promise<void> {
      return getForecast(payload.latitude, payload.longitude).then((res) => {
        const responseData: any = res.data;
        const weekWeatherData: WeekWeatherData = responseData.daily.map((e: any) => ({
            temperature: {
              day: e.temp.day,
              night: e.temp.night,
            },
            description: e.weather[0].description,
            icon: e.weather[0].icon,
            timestamp: e.dt,
            wind: e.wind_speed,
          }));
          commit('setWeekWeatherData', weekWeatherData);
      })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getWeekWeatherData(state: State): WeekWeatherData {
      return state.weekWeatherData;
    },
  },
};

export default weekForecastModule;
