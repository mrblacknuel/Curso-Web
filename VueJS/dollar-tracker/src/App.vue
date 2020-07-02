<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <v-dialog v-model="loading.activo" hide-overlay persistent width="300">
        <v-card color="secondary" dark>
          <v-card-text>
            {{loading.titulo}}
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),

  computed: {
    ...mapState(["loading"])
  }
};
</script>
