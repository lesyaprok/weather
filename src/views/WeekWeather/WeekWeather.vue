<template>
  <WeekForecastModule />
</template>

<script lang="ts">
import Vue from "vue";
import WeekForecastModule from "../../modules/WeekForecastModule/WeekForecastModule.vue";

export default Vue.extend({
  name: "WeekWeather",
  components: {
    WeekForecastModule,
  },
});
</script>
