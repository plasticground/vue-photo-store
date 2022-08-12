<template>
  <v-dialog
      v-model="getDialogVisible"
      @update:return-value="hideDialog"
  >
    <v-card>
      <v-row class="flex-md-row flex-column" no-gutters>
        <v-col md="10" cols="12">
          <v-img @click="hideDialog" class="pointer" :src="getCurrentPhoto.url"></v-img>
        </v-col>
        <v-col md="2" cols="12">
          <v-card-title>{{ fullTitle }}</v-card-title>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapMutations} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "PhotoDialog",
  computed: {
    ...mapGetters(['getCurrentPhoto', 'getDialogVisible']),
    fullTitle() {
      return `Photo title: ${this.getCurrentPhoto.title}`;
    }
  },
  methods: {
    ...mapMutations(['hideDialog'])
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>