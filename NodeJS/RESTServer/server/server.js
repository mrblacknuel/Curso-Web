require("./config/config");
const colors = require("colors");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Rutas de los usuarios en BD
app.use("/", require("./routes/index"));

mongoose.connect(
  "mongodb://localhost:27017/cafe",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log("Imposible realizar la conexión con MongoDB".red);
      throw err;
    } else {
      console.log(
        "Conexión con MongoDB realizada de forma satisfactoria".yellow
      );
    }
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Escuchando en el puerto ${process.env.PORT}`.blue)
);
