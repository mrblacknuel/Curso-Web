Vue.component("padre", {
  template: `
    <div class="my-3 p-5 bg-dark text-white">
        <h2>Componente padre: {{numeroPadre}}</h2>
        <h2>Nombre hijo: {{nombreHijo}}</h2>
        <button class="my-3 btn btn-danger" @click="numeroPadre++">+</button>
        <hijo @nombreHijo="nombreHijo = $event" :numero="numeroPadre"></hijo>
    </div>
    `,
  data() {
    return {
      numeroPadre: 0,
      nombreHijo: "",
    };
  },
});
