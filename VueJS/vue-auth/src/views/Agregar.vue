<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <input
        type="text"
        v-model="$v.nombre.$model"
        class="form-control mt-3"
        placeholder="Ingrese tarea"
      />
      <small class="text-danger d-block" v-if="!$v.nombre.required">Campo requerido</small>
      <small class="text-danger d-block" v-if="!$v.nombre.minLength">Minimo 5 caracteres</small>
      <button :disabled="$v.$invalid || carga" class="btn btn-primary mt-3" type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Agregar",
  data() {
    return {
      nombre: ""
    };
  },
  methods: {
    ...mapActions(["agregarTarea"])
  },
  validations: {
    nombre: {
      required,
      minLength: minLength(5)
    }
  },
  computed: {
    ...mapState(['carga'])
  }
};
</script>
