import { RouteConfig } from 'vue-router';

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
    name: 'Maps',
  },
];

const routes: Array<RouteConfig> = routeOptions.map((route) => ({
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`),
}));

export default routes;
