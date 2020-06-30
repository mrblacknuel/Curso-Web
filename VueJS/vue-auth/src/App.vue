<template>
  <div id="app" class="container mt-2">
    <div id="nav">
      <router-link to="/" class="btn btn-dark mr-2" v-if="existeUsuario">Inicio</router-link>
      <router-link to="/registro" class="btn btn-dark mr-2" v-if="!existeUsuario">Registro</router-link>
      <router-link to="/acceso" class="btn btn-dark mr-2" v-if="!existeUsuario">Acceso</router-link>
      <button @click="logout" class="btn btn-dark mr-2" v-if="existeUsuario">Cerrar sesión</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapGetters(["existeUsuario"])
  }
};
</script>