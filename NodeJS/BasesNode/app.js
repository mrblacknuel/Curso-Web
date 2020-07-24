const { listar, crear } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case "listar":
    listar(argv.base, argv.limite);
    break;

  case "crear":
    crear(argv.base, argv.limite)
      .then((archivo) => console.log(`${archivo.green} creado con éxito`))
      .catch((err) => console.log(err));
    break;

  default:
    console.log("Comando no reconocido");
    break;
}
