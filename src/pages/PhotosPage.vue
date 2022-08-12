<template>
  <v-container v-if="getAllPhotos.length">
    <PhotoForm @addPhoto="addPhoto"/>
    <PhotoItem :photo="photo" :key="photo.id" v-for="photo in getAllPhotos"/>
    <PhotoDialog/>
  </v-container>
  <v-container v-else>
    <div class="text-center">
      <v-progress-circular
          indeterminate
          color="purple darken-3"
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import PhotoItem from "@/components/photo/PhotoItem";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "PhotosPage",
  components: {
    PhotoDialog,
    PhotoItem,
    PhotoForm
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(['fetchPhotos']),

    addPhoto(photo) {
      this.photos.unshift(photo);
    },
  },
  computed: {
    ...mapGetters(['getAllPhotos'])
  }
}
</script>

<style scoped>

</style>