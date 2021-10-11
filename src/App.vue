<template>
  <div id="app">
    temperature: {{ Math.round(temperature) }}
    feels like: {{  Math.round(feelsLike) }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getCurrentWeatherData } from './services/currentWeather-service';

@Component
export default class App extends Vue {
  temperature = 0;
  feelsLike = 0;

  getCurrentWeather(){
    getCurrentWeatherData().then(data => {
      this.temperature = data.main.temp;
      this.feelsLike = data.main.feels_like;
    })
  }
  mounted() {
   this.getCurrentWeather()
  }
}

</script>

<style lang="scss">

</style>
