<template>
  <v-card
    align="center"
    class="px-0 py-3 mx-1 px-sm-1 width-150 width-sm-150"
    width="150"
  >
    <v-card-title class="justify-center text-sm-h6">{{
      new Date(timestamp * 1000).getDate()
    }}</v-card-title>
    <v-card-text>
      <v-img
        :src="require(`../../assets/weatherIcons/${icon || '01d'}.png`)"
        width="50"
      >
      </v-img>
    </v-card-text>

    <v-card-text class="py-0">
      <v-row class="justify-center" align="baseline">
        <v-col cols="6" class="text-h6 pr-0"
          >{{ Math.round(temperature.day) }}&deg;</v-col
        >
        <v-col cols="4" class="pl-0"
          >{{ Math.round(temperature.night) }}&deg;</v-col
        >
      </v-row>
    </v-card-text>
    <v-card-subtitle class="pt-2">{{ description }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WeekCard',
  props: {
    temperature: Object,
    description: String,
    wind: Number,
    timestamp: Number,
    icon: String,
  },
});
</script>
