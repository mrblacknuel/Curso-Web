import { db } from "@/plugins/firebase.js";

export const state = () => ({
  tareas: [],
  tarea: {}
});

export const mutations = {
  setTareas(state, payload) {
    state.tareas = payload;
  },
  setTarea(state, payload) {
    state.tareas.push(payload);
  },
  setTareaEdicion(state, payload) {
    state.tarea = payload;
  },
  setNombreTarea(state, payload) {
    state.tarea.nombre = payload;
  },
  deleteTarea(state, payload) {
    state.tareas = state.tareas.filter(t => t.id !== payload.id);
  },
  updateTarea(state, payload) {
    let i = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas[i].nombre = payload.nombre;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return db
      .collection("tareas")
      .get()
      .then(query => {
        let tareas = [];
        query.forEach(el => {
          let tarea = el.data();
          tarea.id = el.id;
          tareas.push(tarea);
        });
        return commit("setTareas", tareas);
      })
      .catch(err => console.log(err));
  },
  async agregarTarea({ commit }, payload) {
    try {
      const doc = await db.collection("tareas").add({
        nombre: payload,
        fecha: new Date()
      });
      commit("setTarea", {
        nombre: payload,
        id: doc.id
      });
    } catch (error) {
      console.log(error);
    }
  },
  eliminarTarea({ commit }, payload) {
    try {
      db.collection("tareas")
        .doc(payload.id)
        .delete()
        .then(() => {
          console.log("Tarea borrada");
          commit("deleteTarea", payload);
        });
    } catch (error) {
      console.log(error);
    }
  },
  editarTarea({ commit }, payload) {
    try {
      db.collection("tareas")
        .doc(payload.id)
        .update({
          nombre: payload.nombre
        })
        .then(() => {
          console.log("Tarea editada");
          commit("updateTarea", payload);
          this.app.router.push("/vuex");
        });
    } catch (error) {
      console.log(error);
    }
  }
};
