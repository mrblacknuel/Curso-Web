import Vue from "vue";
import Vuex from "vuex";

import { auth, db } from "../firebase";
import router from "../router";
import { setTimeout } from "core-js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    tareas: [],
    tareaActual: {
      nombre: "",
      id: 0,
    },
    carga: false,
    textoBusqueda: "",
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
      console.log(payload);
    },
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, tarea) {
      state.tareaActual = tarea;
    },
    deleteTarea(state, idTarea) {
      state.tareas = state.tareas.filter((t) => t.id !== idTarea);
    },
    cargaFirebase(state) {
      state.carga = true;
    },
    descargaFirebase(state) {
      state.carga = false;
    },
  },
  actions: {
    buscador({ commit, state }, payload) {
      state.textoBusqueda = payload.toLowerCase();
    },
    getTareas({ commit, state }) {
      // Comienza la carga
      commit("cargaFirebase");

      const tareas = [];
      db.collection(state.usuario.email)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
          commit("setTareas", tareas);

          setTimeout(() => {
            // Finalizada la carga
            commit("descargaFirebase");
          }, 500);
        })
        .catch((error) => console.log(error));
    },
    getTarea({ commit }, idTarea) {
      db.collection(this.state.usuario.email)
        .doc(idTarea)
        .get()
        .then((doc) => {
          let tarea = doc.data();
          tarea.id = doc.id;
          commit("setTarea", tarea);
        });
    },
    editarTarea({ commit }, tarea) {
      commit("cargaFirebase");

      db.collection(this.state.usuario.email)
        .doc(tarea.id)
        .update({
          nombre: tarea.nombre,
        })
        .then(() => {
          router.push({ name: "Inicio" });
          commit("descargaFirebase");
        });
    },
    agregarTarea({ commit }, nombreTarea) {
      commit("cargaFirebase");

      db.collection(this.state.usuario.email)
        .add({
          nombre: nombreTarea,
        })
        .then((doc) => {
          console.log("Nueva tarea:", doc.id);
          commit("descargaFirebase");
        });
    },
    eliminarTarea({ commit }, idTarea) {
      db.collection(this.state.usuario.email)
        .doc(idTarea)
        .delete()
        .then(() => console.log("Tarea eliminada"));

      // Recoge de nuevo las tareas para actualizar la información
      //this.dispatch("getTareas");
      commit("deleteTarea", idTarea);
    },
    crearUsuario({ commit }, usuario) {
      auth
        .createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          let user = {
            email: res.user.email,
            password: res.user.password,
            uid: res.user.uid,
          };

          db.collection(user.email)
            .add({
              nombre: "Tarea de ejemplo",
            })
            .then((res) => {
              commit("setUsuario", user);
              router.push("/");
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error.code);
        });
    },
    login({ commit }, usuario) {
      auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          let loggedUser = {
            email: res.user.email,
            password: res.user.password,
            uid: res.user.uid,
          };
          commit("setUsuario", loggedUser);
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error.code);
        });
    },
    logout({ commit }) {
      auth
        .signOut()
        .then((res) => {
          console.log(res);
          router.push("/acceso");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    detectarUsuario({ commit }, user) {
      commit("setUsuario", user);
    },
  },
  getters: {
    existeUsuario(state) {
      return state.usuario !== null;
    },
    tareasFiltro(state) {
      return state.tareas.filter((t) =>
        t.nombre.toLowerCase().includes(state.textoBusqueda)
      );
    },
  },
  modules: {},
});
