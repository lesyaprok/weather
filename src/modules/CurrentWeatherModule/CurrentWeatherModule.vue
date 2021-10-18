<template>
  <v-card class="current-weather-card mx-auto teal lighten-5" max-width="500" flat>
    <v-list-item two-line>
      <v-list-item-content align="center">
        <v-list-item-title
          class="current-weather-card__city text-h4">
          Hrodna, Belarus
        </v-list-item-title>
        <v-list-item-subtitle class="current-weather-card__time text-h6">
          00.00
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="pb-0">
      <v-row align="center" justify="center" class="justify-center">
        <v-col cols="4">
          <v-img
            class="current-weather-card__img"
            :src="images.sunIcon"
            alt="Sun"
            width="100"
          >
          </v-img>
        </v-col>
        <v-col cols="6" class="current-weather-card__temperature text-sm-h1 text-h2"
          >
          {{ temperature }}
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="current-weather-card__description text-h5 black--text" align="center">
      {{ description }}
    </v-card-text>
    <v-list-item class="current-weather-card__info">
      <v-row align="center">
        <v-col cols="4" class="info__item text-center">
          {{ feelsLike }}
        </v-col>
        <v-col
          cols="4"
          class="info__item text-center">
          {{ windSpeed }}
        </v-col>
        <v-col
          cols="4"
          class="info__item text-center">
          {{ humidity }}
        </v-col>
      </v-row>
    </v-list-item>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
// import { WeatherData } from '../../services/types';
import images from './constants';

export default Vue.extend({
  name: 'CurrentWeatherModule',
  data() {
    return {
      images,
    };
  },
  computed: {
    ...mapGetters({
      getWeatherData: 'currentWeatherModule/getWeatherData',
    }),
    // weatherData(): WeatherData {
    //   return this.getWeatherData;
    // },
    temperature(): string {
      return `${Math.round(this.getWeatherData.temperature) || 0 }\u00B0C`;
    },
    description(): string {
      return this.getWeatherData.description || '';
    },
    feelsLike(): string {
      return `Feels like ${Math.round(this.getWeatherData.feelsLike) || 0 }\u00B0C`;
    },
    windSpeed(): string {
      return `Wind ${Math.round(this.getWeatherData.windSpeed) || 0} m/s`;
    },
    humidity(): string {
      return `Humidity ${this.getWeatherData.humidity || 0 } %`;
    },

  },
  methods: {
    ...mapActions({
      provideCurrentWeatherData: 'currentWeatherModule/provideCurrentWeatherData',
    }),
  },
  created() {
    this.provideCurrentWeatherData();
  },
});
</script>
