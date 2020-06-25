Vue.component("saludo", {
  data() {
    return {
      saludo: "Hola amigos del metal",
    };
  },

  template: "<h1>{{saludo}}</h1>",
});
