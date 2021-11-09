import { Commit } from 'vuex';
import getForecast from '../../services/forecastService';
import { Coordinates, ResponseWeatherData, WeekWeatherData } from '../../services/types';

interface State {
  latitude: number;
  longitude: number;
  weekWeatherData: WeekWeatherData | null;
}

const weekForecastModule = {
  namespaced: true,
  state: {
    latitude: 53.6772608,
    longitude: 23.83872,
    weekWeatherData: null,
  } as State,
  mutations: {
    setWeekWeatherData(state: State, weekWeatherData: WeekWeatherData): void {
      state.weekWeatherData = weekWeatherData;
    },
  },
  actions: {
    provideWeekForecastData({ commit }: { commit: Commit }, payload: Coordinates): Promise<void> {
      return getForecast(payload.latitude, payload.longitude).then((res) => {
        const responseData: ResponseWeatherData = res.data;
        const weekWeatherData: WeekWeatherData[] = responseData.daily.map((dailyItem) => ({
          temperature: {
            day: dailyItem.temp.day,
            night: dailyItem.temp.night,
          },
          description: dailyItem.weather[0].description,
          icon: dailyItem.weather[0].icon,
          timestamp: dailyItem.dt,
          wind: dailyItem.wind_speed,
        }));
        commit('setWeekWeatherData', weekWeatherData);
      })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getWeekWeatherData(state: State): WeekWeatherData | null {
      return state.weekWeatherData;
    },
  },
};

export default weekForecastModule;
