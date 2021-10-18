<template>
  <current-weather-module />
</template>
<script lang="ts">
import Vue from 'vue';
import CurrentWeatherModule from '@/modules/CurrentWeatherModule/CurrentWeatherModule.vue'

export default Vue.extend({
  name: 'CurrentWeather',
  components: { CurrentWeatherModule },
})
</script>
