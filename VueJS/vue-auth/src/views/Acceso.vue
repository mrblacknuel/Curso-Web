<template>
  <div>
    <h1>Acceso</h1>
    <form @submit.prevent="login({email: email, password: password})">
      <input class="form-control mb-2" type="email" placeholder="Ingrese email" v-model="email" />
      <input
        type="password"
        class="form-control mb-2"
        v-model="password"
        placeholder="Ingrese contraseña"
      />
      <button type="submit" class="btn btn-primary">Acceder</button>
      <p>{{error}}</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
  }
};
</script>