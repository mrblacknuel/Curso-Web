<template>
  <div class="container mb-5">
    <h2>Editar tarea</h2>
    <b-form @submit.prevent="editarTarea(tarea)">
      <b-form-input v-model="tarea.nombre" class="mb-2"></b-form-input>
      <b-button type="submit" variant="primary">Editar</b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapState, mapActions } from "vuex";

export default {
  fetch({ store, params }) {
    return db
      .collection("tareas")
      .doc(params.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let tarea = doc.data();
          tarea.id = doc.id;
          return store.commit("setTareaEdicion", tarea);
        }
      })
      .catch((err) => console.log(err));
  },
  computed: {
    tarea: {
      get() {
        return {
          nombre: this.$store.state.tarea.nombre,
          id: this.$store.state.tarea.id,
          fecha: this.$store.state.tarea.fecha,
        };
      },
      set(valor) {
        return this.$store.commit("setNombreTarea", valor);
      },
    },
  },
  methods: {
    ...mapActions(["editarTarea"]),
  },
};
</script>

<style>
</style>
