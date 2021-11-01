<template>
  <v-card
    class="week-card px-0 py-3 mx-1 px-sm-1 width-150 width-sm-150"
    align="center"
    width="150"
  >
    <v-card-title class="week-card__title title justify-center text-sm-h6">
      {{ date }}
    </v-card-title>
    <v-card-text class="week-card__img-container img-container">
      <v-img
        class="img-container__img"
        :src="require(`../../assets/weatherIcons/${icon || '01d'}.png`)"
        width="50"
      >
      </v-img>
    </v-card-text>
    <v-card-text class="week-card__temperature temperature py-0">
      <v-row class="justify-center" align="baseline">
        <v-col cols="6" class="temperature__item text-h6 pr-0">
          {{ Math.round(temperature.day) }}&deg;
        </v-col>
        <v-col cols="4" class="temperature__item pl-0">
          {{ Math.round(temperature.night) }}&deg;
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-subtitle class="week-card__description pt-2">{{ description }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { PropType } from "vue";

interface Temperature {
  day: number;
  night: number;
}

export default Vue.extend({
  name: "WeekCard",
  props: {
    temperature: Object as PropType<Temperature>,
    description: String,
    wind: Number,
    timestamp: Number,
    icon: String,
  },
  computed: {
    date() {
      return new Date(this.timestamp * 1000).getDate();
    },
  },
});
</script>
