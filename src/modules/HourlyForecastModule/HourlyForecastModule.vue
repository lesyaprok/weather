<template>
  <section class="hourly-forecast">
    <v-slide-group show-arrays class="hourly-forecast__cards cards pa-4 my-10">
      <v-card
        class="
          cards__item   
          item
          d-flex
          justify-center
          align-center
          flex-column
          px-4
          pb-4
        "
        v-for="(item, index) in getHourlyData"
        :key="item.id"
      >
        <v-card-title class="item__hour">{{ hour[index] }}</v-card-title>
        <v-img
          class="item__img"
          :src="require(`../../assets/weatherIcons/${item.icon || '01d'}.png`)"
          width="40"
        >
        </v-img>
        <v-card-text class="item__temp" align="center">
          {{ temperature[index] }}
        </v-card-text>
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
    temperature(): Array<number | string> {
      return this.getHourlyData.map((hourlyWeatherItem: HourlyWeatherData) => {
        const temp = Math.round(hourlyWeatherItem.temperature);

        if (hourlyWeatherItem.temperature >= 0) {
          return `+${temp}`;
        }
          return temp;
      });
    },
    hour(): Array<string> {
      return this.getHourlyData.map(
        (hourlyWeatherItem: HourlyWeatherData) => `${new Date(hourlyWeatherItem.timestamp * 1000).getHours()}:00`,
      );
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
