<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link to="/agregar">
      <button class="btn btn-primary mb-3">Agregar</button>
    </router-link>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in tareas" :key="index">
        {{item.id}} - {{item.nombre}}
        <div class="float-right">
          <router-link :to="{name: 'Editar', params: {id: item.id}}">
            <button class="btn btn-warning btn-sm mr-2">Editar</button>
          </router-link>
          <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Inicio",
  computed: {
    ...mapState(["usuario", "tareas"])
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  created() {
    this.getTareas();
  }
};
</script>