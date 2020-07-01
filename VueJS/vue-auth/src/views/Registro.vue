<template>
  <div>
    <h1>Registro de usuarios</h1>
    <form @submit.prevent="crearUsuario({email, password: pass1})">
      <input type="email" class="form-control mb-2" placeholder="Ingrese email" v-model="email" />
      <small v-if="!$v.email.required" class="text-danger">Campo requerido</small>
      <small v-if="!$v.email.email" class="text-danger">Email no válido</small>
      <input
        type="password"
        class="form-control mb-2"
        placeholder="Ingrese contraseña"
        v-model="pass1"
      />
      <small v-if="!$v.pass1.minLength" class="text-danger">Debe tener al menos 6 caracteres</small>
      <input
        type="password"
        class="form-control mb-2"
        placeholder="Repita contraseña"
        v-model="pass2"
      />
      <small v-if="!$v.pass2.sameAs" class="text-danger d-block my-2">Las contraseñas deben coincidir</small>
      <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Registrar</button>
    </form>
    <p v-if="error === 'auth/email-already-in-use'" class="text-danger">El email ya está siendo utilizado</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

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
    ...mapState(["error"])
  },
  validations: {
    email: {
      email,
      required
    },
    pass1: {
      minLength: minLength(6),
      required
    },
    pass2: {
      sameAs: sameAs("pass1")
    }
  }
};
</script>
