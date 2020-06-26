<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item, index) of getFrutasOrden"
        :key="item.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    <button type="button" @click="limpiar" class="btn btn-danger btn-block">Reiniciar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["frutas"]),
    getFrutasOrden() {
      return this.ordenar();
    }
  },
  methods: {
    ...mapMutations(["aumentar", "limpiar", "getFrutasOrden"]),
    ordenar() {
      return this.frutas.sort((a, b) => b.cantidad - a.cantidad);
    }
  }
};
</script>