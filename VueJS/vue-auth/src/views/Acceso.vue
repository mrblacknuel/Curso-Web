<template>
  <div>
    <h1>Acceso</h1>
    <form @submit.prevent="login({email: $v.email.$model, password: $v.password.$model})">
      <input class="form-control mb-2" type="email" placeholder="Ingrese email" v-model="$v.email.$model" />
      <small v-if="!$v.email.email" class="text-danger">Email no válido</small>
      <input
        type="password"
        class="form-control mb-2"
        v-model="$v.password.$model"
        placeholder="Ingrese contraseña"
      />
      <button :disabled="$v.$invalid" type="submit" class="btn btn-primary">Acceder</button>
      <p class="text-danger" v-if="error === 'auth/wrong-password'">Contraseña incorrecta</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Acceso",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"])
  },
  computed: {
    ...mapState(["error"])
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>