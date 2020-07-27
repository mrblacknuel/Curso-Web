const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    demand: true,
    alias: "d",
    desc: "Dirección de la ciudad de la que mostrar el clima",
  },
}).argv;

(printInfo = async (direccion) => {
  try {
    let coords = await lugar.getCoordenadas(argv.direccion);
    let resultado = await clima.printClima(coords.longt, coords.latt);
    console.log(
      `La temperatura en ${resultado.name} es de ${resultado.main.temp}ºC, ${resultado.weather[0].description}.`
    );
  } catch (error) {
    console.log("Pruebe más tarde a realizar la petición");
  }
})();
