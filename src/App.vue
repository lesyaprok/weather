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
import { Component, Vue } from "vue-property-decorator";
import Header from "./views/Header/Header.vue";
import Footer from "./views/Footer/Footer.vue";
@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>