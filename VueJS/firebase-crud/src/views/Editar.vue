<template>
  <div>
    <h3>{{tareaActual.id}} - {{tareaActual.nombre}}</h3>
    <form @submit.prevent="editarTarea(tareaActual)">
      <input type="text" v-model="tareaActual.nombre" :placeholder="tareaActual.nombre" />
      <button type='submit'>Guardar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  created() {
    this.getTarea(this.id);
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"])
  },
  computed: {
    ...mapState(["tareaActual"])
  }
};
</script>