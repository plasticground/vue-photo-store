<template>
  <v-row class="justify-center">
    <v-col md="6" cols="12">
      <v-card @click="openPhoto">
        <v-img :src="photo.url"></v-img>
        <v-card-text>{{ photo.title }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "PhotoItem",
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setCurrentPhoto', 'showDialog']),

    openPhoto() {
      this.setCurrentPhoto(this.photo)
      this.showDialog()
    }
  }
}
</script>

<style scoped>

</style>