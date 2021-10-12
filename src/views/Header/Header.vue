<template>
  <header class="header">
    <v-app-bar app color="cyan darken-1" dark>
      <v-col class="d-flex white--text font-weight-bold">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-app-bar-title class="d-flex align-center pl-3"
          >Weather</v-app-bar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar-items color="blue" 
          class="hidden-sm-and-down" 
          height="100%"
        >
          <v-btn
            v-for="item in menuItems"
            :key="item.id"
            depressed
            color="cyan darken-1"
            class="white"
          >
            <router-link
              class="white--text text-decoration-none"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </v-btn>
        </v-toolbar-items>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      dark
      color="cyan darken-1"
      overlay-color="black"
    >
      <v-list nav>
        <v-list-item-group active-class="white--text text--accent-4">
          <v-list-item v-for="item in menuItems" :key="item.id">
            {{ item.name }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          id: 1,
          name: "Current weather",
          path: "/",
        },
        {
          id: 2,
          name: "Week",
          path: "/week",
        },
        {
          id: 3,
          name: "Month",
          path: "/month",
        },
        {
          id: 4,
          name: "Maps",
          path: "/maps",
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.v-btn {
  transition: all 0.4s ease-in-out;
  &:hover {
    padding: 25px 0;
    background-color: #00acc1;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
}
</style>
