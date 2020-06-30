<template>
  <div>
    <h1>Registro de usuarios</h1>
    <form @submit.prevent="crearUsuario({email, password: pass1})">
      <input type="email" class="form-control mb-2" placeholder="Ingrese email" v-model="email" />
      <input type="password" class="form-control mb-2" placeholder="Ingrese contraseña" v-model="pass1" />
      <input type="password" class="form-control mb-2" placeholder="Repita contraseña" v-model="pass2" />
      <button type="submit" class="btn btn-primary" :disabled="passwordIncorrecta">Registrar</button>
    </form>
    <p>{{error}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: ""
    };
  },
  created() {},
  methods: {
    ...mapActions(["crearUsuario"])
  },
  computed: {
    ...mapState(["error"]),
    passwordIncorrecta() {
      return (
        this.pass1 !== this.pass2 ||
        (this.pass1.trim() === "" && this.pass1.length > 6)
      );
    }
  }
};
</script>
