const fs = require("fs");

let listadoPorHacer = [];

// Inicializa el array de tareas
const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = (descripcion) => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);
  guardarDB(); // Actualiza la BD

  return porHacer;
};

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw err;
    console.log("Se actualizaron las tareas en BD");
  });
};

const getListado = () => {
  cargarDB();

  return listadoPorHacer;
};

const actualizar = (desc, comp = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex((t) => t.descripcion === desc);

  if (index >= 0) {
    listadoPorHacer[index].completado = comp;
    guardarDB();
    return true;
  } else return false;
};

const borrar = (descripcion) => {
  cargarDB();

  listadoPorHacer = listadoPorHacer.filter((t) => t.descripcion != descripcion);

  guardarDB();
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
