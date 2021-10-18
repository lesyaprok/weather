import { RouteConfig } from "vue-router";

const routeOptions = [
  {
    path: '/',
    name: 'CurrentWeather',
  },
  {
    path: '/week',
    name: 'WeekWeather',
  },
  {
    path: '/month',
    name: 'MonthWeather',
  },
  {
    path: '/maps',
    name: 'Maps'
  }
]

export const routes: Array<RouteConfig> = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/Pages/${route.name}.vue`)
  }
})