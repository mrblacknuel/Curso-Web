import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import route from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareas: [],
    tareaActual: {
      nombre: "",
      id: 0,
    },
  },
  mutations: {
    setTareas(state, tareas) {
      state.tareas = tareas;
    },
    setTarea(state, tarea) {
      state.tareaActual = tarea;
    },
    deleteTarea(state, idTarea) {
      state.tareas = state.tareas.filter((t) => t.id !== idTarea);
    },
  },
  actions: {
    getTareas({ commit }) {
      const tareas = [];
      db.collection("tareas")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
        });
      commit("setTareas", tareas);
    },
    getTarea({ commit }, idTarea) {
      db.collection("tareas")
        .doc(idTarea)
        .get()
        .then((doc) => {
          let tarea = doc.data();
          tarea.id = doc.id;
          commit("setTarea", tarea);
        });
    },
    editarTarea({ commit }, tarea) {
      db.collection("tareas")
        .doc(tarea.id)
        .update({
          nombre: tarea.nombre,
        })
        .then(() => {
          route.push("/");
        });
    },
    agregarTarea({ commit }, nombreTarea) {
      db.collection("tareas")
        .add({
          nombre: nombreTarea,
        })
        .then((doc) => console.log("Nueva tarea:", doc.id));
    },
    eliminarTarea({ commit }, idTarea) {
      db.collection("tareas")
        .doc(idTarea)
        .delete()
        .then(() => console.log("Tarea eliminada"));

      // Recoge de nuevo las tareas para actualizar la información
      //this.dispatch("getTareas");
      commit("deleteTarea", idTarea);
    },
  },
  modules: {},
});
