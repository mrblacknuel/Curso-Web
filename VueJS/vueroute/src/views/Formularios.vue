<template>
  <div>
    <h1>Formularios</h1>
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input v-model="texto" type="text" :state="checkTexto"></b-form-input>
          <small>Mínimo 3 caracteres</small>
          <p>Texto: {{texto}}</p>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
          <p>Selección: {{select}}</p>
        </b-col>
        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
          <p>Radio: {{radio}}</p>
        </b-col>
        <b-col md="3">
          <b-checkbox-group v-model="box" :options="animalesRadio"></b-checkbox-group>
          <p>Checkbox: {{box}}</p>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formularios",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      box: [],
      animales: [
        { value: null, text: "Seleccione un animal" },
        { value: "ardilla", text: "* sonido de ardilla" },
        { value: "perro", text: "Guau guau" }
      ],
      animalesRadio: [
        { value: "ardilla", text: "* sonido de ardilla" },
        { value: "perro", text: "Guau guau" }
      ]
    };
  },
  computed: {
    checkTexto() {
      return this.texto.length > 2;
    }
  }
};
</script>