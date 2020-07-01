<template>
  <div>
    <h1>Vuelidate</h1>
    <form>
      <input type="email" v-model="email" placeholder="Mete tu email" class="form-control my-3" />
      <!--
      <p>{{$v.email.$model}}</p>
      -->
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Validacion",
  data() {
    return {
      email: ""
    };
  },
  validations() {
    email: {
      required, email;
    }
  }
};
</script>