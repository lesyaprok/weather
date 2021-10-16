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
import { Data, WeatherData } from '../services/types';

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
  computed: {
    ...mapGetters({
      getWeatherData: 'currentWeatherModule/getWeatherData',
    }),
    weatherData(): Data {
      return this.getWeatherData;
    },
  },
  methods: {
    ...mapActions({
      provideCurrentWeatherData: 'currentWeatherModule/provideCurrentWeatherData',
    }),
  },
  created() {
    this.provideCurrentWeatherData().then(() => {
      this.temperature = this.weatherData.main.temp;
      this.feelsLike = this.weatherData.main.feels_like;
      this.humidity = this.weatherData.main.humidity;
      this.windSpeed = this.weatherData.wind.speed;
      this.description = this.weatherData.weather[0].main;
    });
  },
});
</script>
