const fs = require("fs");
const colors = require("colors");

let listar = (base, limite = 10) => {
  // Header
  console.log("======================".green);
  console.log(`======TABLA DEL ${base}=====`.green);
  console.log("======================".green);

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let crear = (base, limite = 10) => {
  return new Promise((res, rej) => {
    let contenido = "";
    for (let i = 1; i <= limite; i++) {
      contenido += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, contenido, (err) => {
      if (err) {
        rej(err);
      } else res(`tabla-${base}-${limite}.txt`);
    });
  });
};

module.exports = {
  listar,
  crear,
};
