<template>
  <current-weather-module />
</template>
<script lang="ts">
import Vue from 'vue';
import CurrentWeatherModule from '@/modules/currentWeatherModule/currentWeatherModule.vue'

export default Vue.extend({
  name: 'CurrentWeather',
  components: { CurrentWeatherModule },
})
</script>
