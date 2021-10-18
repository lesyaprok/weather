<template>
  <v-app>
    <Header />
    <v-main class="teal lighten-5">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "./layouts/Header/Header.vue";
import Footer from "./layouts/Footer/Footer.vue";
export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Footer,
  }
})
</script>

<style lang="scss">
</style>