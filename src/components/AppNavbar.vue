<template>
  <v-container fluid>
    <v-app-bar color="purple darken-3" dense app>
      <router-link tag="button" to="/">
        <v-btn text color="yellow accent-3">Home</v-btn>
      </router-link>

      <router-link tag="button" to="/photos">
        <v-btn text color="yellow accent-3">Photos</v-btn>
      </router-link>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "AppNavbar"
}
</script>

<style scoped>

</style>