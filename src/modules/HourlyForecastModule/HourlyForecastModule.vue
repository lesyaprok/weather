<template>
  <div></div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'HourlyForecastModule',
  computed: {
    ...mapGetters({
      getCoordinates: 'currentWeatherModule/getCoordinates',
      getHourlyData: 'hourlyForecastModule/getHourlyData',
    }),
    coordinates() {
      return this.getCoordinates;
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
