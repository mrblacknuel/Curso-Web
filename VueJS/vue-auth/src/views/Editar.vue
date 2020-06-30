<template>
  <div>
    <h1>Editar</h1>
    {{id}} - {{tareaActual}}
    <form @submit.prevent="editarTarea(tareaActual)">
      <input class="form-control mb-2" type="text" v-model="tareaActual.nombre" />
      <button class="btn btn-warning">Editar</button>
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