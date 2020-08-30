<template>
  <div class="container mt-5">
    <div v-for="art in articulos" :key="art.id" class="card">
      <div class="card-body text-center">
        <nuxt-link :to="`/blog/${art.id}`">
          <h1>{{ `Título ${art.id}` }}</h1>
        </nuxt-link>
        <p>{{ art.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  //   head: {
  //     title: "Blog Nuxt",
  //     meta: {
  //       hid: "Description",
  //       name: "Description",
  //       content: "Descripción del sitio web",
  //     },
  //   },
  async created() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      console.log(res.data);
      this.articulos = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      articulos: [],
    };
  },
};
</script>