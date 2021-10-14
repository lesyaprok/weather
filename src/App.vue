<template>
  <div id="app">
    <!-- <nav> -->
      <!-- <router-link to="/">Today</router-link> 
      <router-link to="/week">Week</router-link>
      <router-link to="/month">Month</router-link>
      <router-link to="/maps">Maps</router-link> -->
      <router-view></router-view>
    <!-- </nav> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

}

</script>

<style lang="scss">

</style>
