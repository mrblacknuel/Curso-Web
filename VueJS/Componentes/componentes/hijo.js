Vue.component("hijo", {
  template: `
    <div class="p-3 bg-success text-white">
        <h2>Componente hijo: {{numero}}</h2>
        <h3>{{nombre}}</h3>
    </div>
    `,
  props: ["numero"],
  data() {
      return {
          nombre: 'Pepelu'
      }
  },
  // Se ejecuta cuando ya se realizó la sustitución del HTML
  mounted() {
    this.$emit('nombreHijo', this.nombre);
  }
});
