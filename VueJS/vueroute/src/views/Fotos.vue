<template>
  <div>
    <h1>Fotografía:</h1>
    <router-link
      :to="{name: 'Fotos', params: {id: item}}"
      v-for="(item, index) of fotos"
      :key="index"
    >
      <button>Foto {{item}}</button>
    </router-link>
    <Foto />
    <button @click="home">Home</button>
    <button @click="prev">Anterior</button>
    <button @click="next">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue";

export default {
  components: {
    Foto
  },
  data() {
    return {
      fotos: [1, 2, 3]
    };
  },
  methods: {
    // Vuelve a inicio
    home() {
      this.$router.push("/");
    },
    // Retrocede
    prev() {
      this.$router.go(-1);
    },
    // Avanza
    next() {
      this.$router.go(1);
    }
  }
};
</script>