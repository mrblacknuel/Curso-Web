<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link to="/agregar">
      <button class="btn btn-primary mb-3">Agregar</button>
    </router-link>

    <form @submit.prevent="buscador(texto)">
      <input
        type="text"
        class="form-control my-4"
        v-model="texto"
        v-on:keyup="buscador(texto)"
        placeholder="Buscar..."
      />
    </form>

    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando contenido...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>

    <ul class="list-group" v-if="!carga">
      <li class="list-group-item" v-for="(item, index) in tareasFiltro" :key="index">
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
import { mapState, mapActions, mapGetters } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "Inicio",
  data() {
    return {
      texto: ""
    };
  },
  computed: {
    ...mapState(["usuario", "tareas", "carga"]),
    ...mapGetters(['tareasFiltro'])
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea", "buscador"])
  },
  created() {
    this.getTareas();
  },
  components: {
    PulseLoader
  }
};
</script>