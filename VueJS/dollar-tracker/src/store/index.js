import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: {
      titulo: "",
      activo: false,
    },
  },
  mutations: {
    mostrarCarga(state, titulo) {
      state.loading.titulo = titulo;
      state.loading.activo = true;
    },
    ocultarCarga(state) {
      state.loading.activo = false;
    },
  },
  actions: {},
  modules: {},
});
