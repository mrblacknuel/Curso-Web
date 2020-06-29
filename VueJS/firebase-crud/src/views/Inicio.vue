<template>
  <div>
    <h1>Lista de tareas</h1>
    <router-link to="/agregar">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="(tarea, index) in tareas" :key="index">
        {{tarea.nombre}} - {{tarea.id}}
        <div class="float-right">
          <router-link :to="{name: 'Editar', params: {id: tarea.id}}">
            <button class="btn btn-warning btn-sm mr-2">Editar</button>
          </router-link>
          <button class="btn btn-danger btn-sm" @click="eliminarTarea(tarea.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Inicio",
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  computed: {
    ...mapState(["tareas"])
  }
};
</script>