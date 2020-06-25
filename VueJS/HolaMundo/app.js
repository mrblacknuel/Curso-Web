const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola Mundo con Vue",
    frutas: [
      { nombre: "Pera", cantidad: 2 },
      { nombre: "Plátano", cantidad: 5 },
      { nombre: "Cereza", cantidad: 0 },
    ],
    nuevaFruta: "",
    total: 0
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0,
      });
      this.nuevaFruta = '';
    }
  },
  computed: {
    sumarCantidad () {
      this.total = 0;
      for (const fruta of this.frutas) {
        this.total += fruta.cantidad;
      }
      return this.total;
    }
  }
});
