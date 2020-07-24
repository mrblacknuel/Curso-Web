const { escribir } = require("./escritura/escritura");

let tecnologia = "node";

// Por consola
console.log(`Hola mundo desde ${tecnologia}!`);

// A fichero
let archivo = process.argv[2] ? process.argv[2] : "holaMundo.txt";

escribir("Hola mundo desde archivo", archivo).then((archivo) =>
  console.log(`Escritura realizada en ${archivo}`)
);

console.log(process.argv);
