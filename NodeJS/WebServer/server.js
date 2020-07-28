const express = require("express");
const app = express();
const hbs = require("hbs");

// Obtiene el puerto que usará Heroku. Si se usa localmente utiliza el 8080
const port = process.env.PORT || 8080;

// Se le indica la carpeta con la que resolver las peticiones
app.use(express.static(__dirname + "/public"));

// Registra los parciales
hbs.registerPartials(__dirname + "/views/partials");

// Registra los helper
require("./hbs/helpers");

app.set("view engine", "hbs");

// Home
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Manuel",
  });
});

// About
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () =>
  console.log(`Escuchando peticiones en el puerto ${port}`)
);
