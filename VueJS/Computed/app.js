const app = new Vue({
  el: "#app",
  data: {
    mensaje: "Hola a todos, ¿como están?",
    contador: 0,
  },
  computed: {
    invertido() {
      return this.mensaje.split("").reverse().join("");
    },
    getFondo() {
      if (this.contador <= 25) return "bg-danger";
      else if (this.contador <= 40) return "bg-warning";
      else return "bg-success";
    },
  },
});
