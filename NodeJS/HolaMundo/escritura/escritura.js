let fs = require("fs");

function escribir(mensaje, archivo) {
  return new Promise((res, rej) => {
    fs.writeFile(archivo, mensaje, (err) => {
      // Si existe un error lo muestra
      if (err) rej(err);
      else res(archivo);
    });
  });
}

module.exports = {
  escribir,
};
