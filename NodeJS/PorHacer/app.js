const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

switch (argv._[0]) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    break;
  case "listar":
    let tareas = porHacer.getListado();
    tareas.forEach((t) => {
      console.log("================".green);
      console.log(" ", t.descripcion);
      console.log("  Completado:", t.completado);
    });
    break;
  case "actualizar":
    if (porHacer.actualizar(argv.descripcion, argv.completado)) {
      console.log("La base de datos de tareas ha sido actualizada");
    } else {
      console.log("La tarea no ha sido encontrada");
    }
    break;

  case "borrar":
    porHacer.borrar(argv.descripcion);
    break;

  default:
    console.log("Comando no reconocido");
    break;
}
