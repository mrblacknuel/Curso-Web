import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: "Manzana", cantidad: 0 },
      { nombre: "Pera", cantidad: 0 },
      { nombre: "Sandía", cantidad: 0 },
    ],
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad++
    },
    limpiar(state) {
      state.frutas.forEach(f => f.cantidad = 0)
    }
  },
  actions: {},
  modules: {},
});
