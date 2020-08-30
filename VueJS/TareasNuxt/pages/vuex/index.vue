<template>
  <div class="container text-center">
    <h2>Vuex</h2>
    <b-form @submit.prevent="agregarTarea(tarea)" class="mb-3">
      <b-form-input v-model="tarea" placeholder="Tarea nueva"></b-form-input>
    </b-form>
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        Tarea {{index + 1}}: {{tarea.nombre}}
        <b-button :to="`/vuex/${tarea.id}`" class="btn-sm btn-warning">Editar</b-button>
        <b-button @click="eliminarTarea(tarea)" class="btn-sm btn-danger">Eliminar</b-button>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tarea: "",
    };
  },
  // fetch({ store }) {
  //   return db
  //     .collection("tareas")
  //     .get()
  //     .then((query) => {
  //       let tareas = [];
  //       query.forEach((el) => tareas.push(el.data()));
  //       return store.commit("setTareas", tareas);
  //     })
  //     .catch((err) => console.log(err));
  // },
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["agregarTarea", "eliminarTarea"]),
  },
};
</script>

<style>
</style>
