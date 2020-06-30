<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <input type="text" v-model="nombre" class="form-control my-3" placeholder="Ingrese tarea" />
      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
