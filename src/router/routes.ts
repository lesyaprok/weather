import { RouteConfig } from "vue-router";
import CurrentWeather from '../view/CurrentWeather.vue';
import WeekWeather from '../view/WeekWeather.vue';
import MonthWeather from '../view/MonthWeather.vue';
import Maps from '../view/Maps.vue';

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