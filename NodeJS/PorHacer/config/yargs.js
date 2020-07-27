const descripcion = {
  demand: true,
  alias: "d",
  desc: "Muestra un resumen de la tarea",
}

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completada la tarea",
},

const argv = require("yargs")
  .command("crear", "Crea un elemento por hacer", {
    descripcion
  })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Borra una tarea", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripción de la tarea a borrar",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
