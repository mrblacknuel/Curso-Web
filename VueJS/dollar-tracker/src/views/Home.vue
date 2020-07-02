<template>
  <div class="home">
    <v-date-picker full-width v-model="fecha" :min="minimo" :max="maximo" @change="getDolar(fecha)"></v-date-picker>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="primary" dark>
            <v-card-text class="display-1 text-center">1 $ = {{valor}} CLP</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      fecha: new Date().toISOString().substr(0, 10),
      minimo: "1984",
      maximo: new Date().toISOString().substr(0, 10),
      valor: null
    };
  },
  methods: {
    ...mapMutations(["mostrarCarga", "ocultarCarga"]),
    async getDolar(dia) {
      let arrayFecha = dia.split("-");
      let ddmmyy = arrayFecha[2] + "-" + arrayFecha[1] + "-" + arrayFecha[0];

      try {
        // Muestra una pantalla de carga
        this.mostrarCarga(`Cargando moneda para el ${ddmmyy}...`);

        let resp = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`);
        if (resp.data.serie.length > 0) {
          this.valor = await resp.data.serie[0].valor;
        } else {
          this.valor = "";
        }
      } catch (error) {
        console.log(error);
      } finally {
        // Oculta la pantalla de carga
        this.ocultarCarga();
      }
    }
  },
  created() {
    this.getDolar(this.fecha);
  }
};
</script>
