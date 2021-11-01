<template>
  <div class="header__input input">
    <v-text-field
      class="input__search-input align-center"
      light
      solo
      hide-details
      v-model="searchedCity"
      @keyup.enter="searchWeatherForCity"
      @blur="searchWeatherForCity"
      @click:append="searchWeatherForCity"
      placeholder="Find a city..."
      append-icon="mdi-magnify"
    >
    </v-text-field>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'HeaderInput',
  computed: {
    ...mapGetters({
      getSearchedCity: 'currentWeatherModule/getSearchedCity',
    }),
    searchedCity: {
      set(value): void {
        this.setSearchedCity(value);
      },
      get(): string {
        return this.getSearchedCity;
      },
    },
  },
  methods: {
    ...mapMutations({
      setSearchedCity: 'currentWeatherModule/setSearchedCity',
    }),
    ...mapActions({
      provideCurrentWeatherData:
        'currentWeatherModule/provideCurrentWeatherData',
      getCoordinatesOfCity: 'currentWeatherModule/getCoordinatesOfCity',
    }),
    searchWeatherForCity() {
      if (this.searchedCity) {
        this.getCoordinatesOfCity();
      }
    },
  },
});
</script>
<style lang="scss" scoped>
</style>
