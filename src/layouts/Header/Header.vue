<template>
  <v-app-bar class="header" app color="cyan darken-1" dark>
    <v-col class="header__column d-flex white--text font-weight-bold">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="header__hide-menu-button hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="header__title d-flex align-center pl-3"
        >Weather</v-app-bar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="header__nav hidden-sm-and-down"
        color="blue"
        height="100%"
      >
        <router-link
          class="nav__link white--text text-decoration-none"
          v-for="item in menuItems"
          :key="item.id"
          :to="item.path"
        >
          {{ item.name }}
        </router-link>
      </v-toolbar-items>
    </v-col>
    <v-navigation-drawer
      class="header__navigation-drawer"
      v-model="drawer"
      absolute
      left
      height="100vh"
      temporary
      dark
      color="cyan darken-1"
      overlay-color="black"
      touch-action="auto"
    >
      <v-list nav class="navigation-drawer__items">
        <v-list-item-group active-class="white--text text--accent-4">
          <router-link
            :to="item.path"
            v-for="item in menuItems"
            :key="item.id"
            class="
              navigation-drawer__item
              white--text
              text-decoration-none
              d-block
            "
          >
            <v-list-item>
              {{ item.name }}
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import menuItems from "./constants";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      drawer: false,
      menuItems,
    };
  },
});
</script>
<style lang="scss" scoped>
.nav__link {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #00acc1;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
}
</style>
