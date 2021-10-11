import { RouteConfig } from "vue-router";
import CurrentWeather from '../views/CurrentWeather.vue';
import WeekWeather from '../views/WeekWeather.vue';
import MonthWeather from '../views/MonthWeather.vue';
import Maps from '../views/Maps.vue';

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'CurrentWeather',
    component: CurrentWeather,
  },
  {
    path: '/week',
    name: 'WeekWeather',
    component: WeekWeather,
  },
  {
    path: '/month',
    name: 'MonthWeather',
    component: MonthWeather,
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps,
  }
]