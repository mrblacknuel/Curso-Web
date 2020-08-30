<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1>{{ articulo.title }}</h1>
        <small>
          <i>{{ usuario.name }}</i>
        </small>
        <h3>{{ articulo.body }}</h3>
        <nuxt-link to="../" class="btn btn-primary">
          Atrás
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  async asyncData({ params }) {
    try {
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );

      const articulo = post.data;

      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${articulo.userId}`
      );
      const usuario = user.data;

      return { articulo, usuario };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  data() {
    return {
      articulo: {},
      usuario: {},
    };
  },
};
</script>
