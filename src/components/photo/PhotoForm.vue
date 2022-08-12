<template>
  <v-container class="mb-10">
    <v-row justify="end" align="center">
      <v-col md="2">
        <v-text-field label="Title"
                      :rules="rules"
                      hide-details="auto"
                      v-model="title"
        />
      </v-col>
      <v-col md="2">
        <v-file-input label="Image"
                      :rules="rules"
                      hide-details="auto"
                      v-model="img"
        />
      </v-col>
      <v-col cols="auto">
        <v-btn class="yellow--text text--accent-3" color="purple darken-3" @click="uploadPhoto">
          Upload
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "PhotoForm",
  data: () => ({
    rules: [
      value => !!value || 'Required'
    ],
    title: '',
    img: null
  }),
  methods: {
    ...mapMutations(['addPhoto']),
    uploadPhoto() {
      if (this.title && this.img) {
        const reader = new FileReader();
        reader.readAsDataURL(this.img);

        reader.onload = () => {
          let photo = {
            id: Date.now(),
            title: this.title,
            url: reader.result
          }

          this.addPhoto(photo);
        }
      }
    }
  }
}
</script>

<style scoped>

</style>