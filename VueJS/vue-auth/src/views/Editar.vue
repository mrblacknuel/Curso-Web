<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="editarTarea(tareaActual)">
      <input class="form-control mb-2" type="text" v-model="$v.tareaActual.nombre.$model" />

      <small class="text-danger d-block" v-if="!$v.tareaActual.nombre.required">Campo requerido</small>
      <small class="text-danger d-block" v-if="!$v.tareaActual.nombre.minLength">Minimo 5 caracteres</small>

      <button :disabled="$v.$invalid || carga" class="btn btn-warning">Editar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

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
    ...mapState(["tareaActual", "carga"])
  },
  validations: {
    tareaActual: {
      nombre: {
        required,
        minLength: minLength(5)
      }
    }
  }
};
</script>