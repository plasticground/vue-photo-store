<template>
  <v-app>
    <AppNavbar/>
    <v-main>
      <v-container fluid class="fill-height">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppNavbar from "@/components/AppNavbar";

export default {
  name: 'App',
  components: {
    AppNavbar
  }
};
</script>
