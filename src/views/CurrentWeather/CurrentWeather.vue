<template>
  <div>
    <CurrentWeatherModule />
    <HourlyForecastModule />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import CurrentWeatherModule from '../../modules/CurrentWeatherModule/CurrentWeatherModule.vue';
import HourlyForecastModule from '../../modules/HourlyForecastModule/HourlyForecastModule.vue';

export default Vue.extend({
  name: 'CurrentWeather',
  components: {
    CurrentWeatherModule,
    HourlyForecastModule,
  },
});
</script>
