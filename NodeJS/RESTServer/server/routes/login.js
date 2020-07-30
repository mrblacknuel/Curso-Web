const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Modelo del usuario
const Usuario = require("../../models/usuario");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  let body = req.body;

  Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
    if (err) {
      return res.status(500).json({ ok: false, err });
    }

    if (!usuarioDB) {
      return res
        .status(400)
        .json({ ok: false, err: "(Usuario) o contraseña incorrectos" });
    }

    if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
      return res
        .status(400)
        .json({ ok: false, err: "Usuario o (contraseña) incorrectos" });
    }

    let token = jwt.sign(
      {
        usuario: usuarioDB,
      },
      process.env.JWT_SEED,
      {
        expiresIn: process.env.EXP_DATE,
      }
    );

    res.json({
      ok: true,
      usuario: usuarioDB,
      token,
    });
  });
});

module.exports = app;
