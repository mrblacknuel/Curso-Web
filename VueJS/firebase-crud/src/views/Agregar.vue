<template>
  <div>
    <h1>Agregar tarea</h1>
    <form @submit.prevent="agregarTarea(nombre)" class="form-inline">
      <input type="text" v-model="nombre" class="form-control mb-2 mr-sm-2">
      <button type="submit" class="btn btn-primary mb-2">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Agregar",
  data() {
    return {
      nombre: ""
    };
  },
  methods: {
    ...mapActions(["agregarTarea"])
  }
};
</script>