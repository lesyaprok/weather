<template>
  <div>
    <h2>Current Weather</h2>
    {{ temperature }}
    {{ feelsLike }}
    {{ humidity }}
    {{ windSpeed }}
    {{ description }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { WeatherData } from '../services/types';

export default Vue.extend({
  name: 'CurrentWeather',
  data(): WeatherData {
    return {
      temperature: 0,
      feelsLike: 0,
      humidity: 0,
      windSpeed: 0,
      description: '',
      time: '',
    };
  },
  // computed: {
  //   ...mapGetters({
  //     getWeatherData: "currentWeatherModule/getWeatherData",
  //   }),
  //   weatherData(): Object {
  //     return this.getWeatherData;
  //   },
  // },
  methods: {
    ...mapActions({
      provideCurrentWeatherData: 'currentWeatherModule/provideCurrentWeatherData',
    }),
  },
  created() {
    this.provideCurrentWeatherData().then((data) => {
      this.temperature = data.main.temp;
      this.feelsLike = data.main.feels_like;
      this.humidity = data.main.humidity;
      this.windSpeed = data.wind.speed;
      this.description = data.weather[0].main;
    });
  },
});
</script>
