<template>
  <section class="hourly-forecast">
    <v-slide-group show-arrays class="hourly-forecast__cards pa-4 my-10">
      <v-card
        class="cards__item d-flex justify-center align-center flex-column px-4 pb-4"
        v-for="item in hourlyData"
        :key="item.id"
      >
        <v-card-title class="item__hour">{{
          `${new Date(item.timestamp * 1000).getHours()}:00`
        }}</v-card-title>
        <v-img
          class="item__img"
          :src="require(`../../assets/weatherIcons/${item.icon || '01d'}.png`)"
          width="40"
        >
        </v-img>
        <v-card-text class="item__temp" align="center">{{
          item.temperature >= 0
            ? `+${Math.round(item.temperature)}`
            : Math.round(item.temperature)
        }}</v-card-text>
      </v-card>
    </v-slide-group>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { HourlyWeatherData, Coordinates } from '../../services/types';

export default Vue.extend({
  name: 'HourlyForecastModule',
  computed: {
    ...mapGetters({
      getCoordinates: 'currentWeatherModule/getCoordinates',
      getHourlyData: 'hourlyForecastModule/getHourlyData',
    }),
    coordinates(): Coordinates {
      return this.getCoordinates;
    },
    hourlyData(): HourlyWeatherData {
      return this.getHourlyData;
    },
  },
  methods: {
    ...mapActions({
      provideHourlyForecastData:
        'hourlyForecastModule/provideHourlyForecastData',
    }),
  },
  watch: {
    coordinates() {
      this.provideHourlyForecastData(this.coordinates);
    },
  },
});
</script>
