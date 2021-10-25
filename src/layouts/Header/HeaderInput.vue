<template>
  <div class="header__search">
    <input
      class="search__input"
      type="text"
      @keyup.enter="searchWeatherForCity"
      v-model="searchedCity"
      placeholder="Find a city..."
    />
    <v-icon class="search__icon" @click="searchWeatherForCity">
      mdi-magnify
    </v-icon>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions, mapMutations } from "vuex";

export default Vue.extend({
  name: "HeaderInput",
  data() {
    return {
      searchedCity: "",
    };
  },
  methods: {
    ...mapMutations({
      setSearchedCity: "currentWeatherModule/setSearchedCity",
    }),
    ...mapActions({
      provideCurrentWeatherData:
        "currentWeatherModule/provideCurrentWeatherData",
      getCoordinatesOfCity: "currentWeatherModule/getCoordinatesOfCity",
    }),
    searchWeatherForCity() {
      if (this.searchedCity) {
        this.setSearchedCity(this.searchedCity);
        this.getCoordinatesOfCity();
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.header {
  &__search {
    display: flex;
  }
}
.search {
  &__input {
    margin-right: 10px;
    padding: 7px 10px;
    background: #fff;
    outline: none;
    border-radius: 5px;
    caret-color: #000;
  }
}
</style>
