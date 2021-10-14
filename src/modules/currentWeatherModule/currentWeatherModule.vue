<template>
  <v-card class="current-weather-card mx-auto teal lighten-5" max-width="500" flat>
    <v-list-item two-line>
      <v-list-item-content align="center">
        <v-list-item-title class="current-weather-card__city text-h4"> London, UK </v-list-item-title>
        <v-list-item-subtitle class="current-weather-card__time text-h6">
          {{ time }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="pb-0">
      <v-row align="center" justify="center" class="justify-center">
        <v-col cols="4">
          <v-img
            class="current-weather-card__img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emoji_u2600.svg/800px-Emoji_u2600.svg.png"
            alt="Sun"
            width="100"
          >
          </v-img>
        </v-col>
        <v-col cols="6" class="current-weather-card__temperature text-sm-h1 text-h2"
          >{{ ~~temperature }}&deg;C</v-col
        >
      </v-row>
    </v-card-text>
    <v-card-text class="current-weather-card__description text-h5 black--text" align="center">
      {{ description }}
    </v-card-text>
    <v-list-item class="current-weather-card__info">
      <v-row align="center">
        <v-col cols="4" class="info__item text-center"
          >Feels like {{ ~~feels_like }}&deg;C</v-col
        >
        <v-col cols="4" class="info__item text-center">Wind {{ ~~wind }} m/s</v-col>
        <v-col cols="4" class="info__item text-center">Humidity {{ humidity }}%</v-col>
      </v-row>
    </v-list-item>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CurrentWeatherModule",
  data() {
    return {
      temperature: 0,
      feels_like: 0,
      humidity: 0,
      wind: 0,
      description: "",
      time: "",
    };
  },
});
</script>