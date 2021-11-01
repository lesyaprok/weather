<template>
  <section class="week-forecast">
    <h2 class="week-forecast__title">
      Week forecast for the city: {{ cityName }}
    </h2>
    <p class="week-forecast__loading" v-if="getWeekWeatherData.length === 0">
      loading
    </p>
    <v-list
      class="week-forecast__wrapper wrapper d-flex justify-center align-stretch transparent"
    >
      <v-slide-group show-arrays class="wrapper__items pa-4">
        <WeekCard
          v-for="day in getWeekWeatherData"
          :key="day.id"
          :temperature="day.temperature"
          :wind="day.wind"
          :description="day.description"
          :timestamp="day.timestamp"
          :icon="day.icon"
        />
      </v-slide-group>
    </v-list>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import WeekCard from './WeekCard.vue';

export default Vue.extend({
  name: 'WeekForecastModule',
  components: {
    WeekCard,
  },
  computed: {
    ...mapGetters({
      getWeekWeatherData: 'weekForecastModule/getWeekWeatherData',
      getCoordinates: 'currentWeatherModule/getCoordinates',
      getCityName: 'currentWeatherModule/getCityName',
    }),
    cityName(): string {
      return this.getCityName;
    },
  },
  watch: {
    cityName() {
      this.provideWeekForecastData(this.getCoordinates);
    },
  },
  methods: {
    ...mapActions({
      provideWeekForecastData: 'weekForecastModule/provideWeekForecastData',
    }),
  },
  created() {
    this.provideWeekForecastData(this.getCoordinates);
  },
});
</script>

<style lang="scss" scoped>
.week-forecast__title {
  text-align: center;
}
</style>
