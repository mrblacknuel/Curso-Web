const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const _ = require("underscore");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Modelo del usuario
const Usuario = require("../../models/usuario");

app.get("/usuario", function (req, res) {
  let desde = Number(req.query.desde) || 0;
  let max = Number(req.query.max) || 5;

  Usuario.find({estado: true}, "email nombre role estado")
    .skip(desde)
    .limit(max)
    .exec((err, usuarios) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      Usuario.countDocuments({estado: true}, (err, count) => {
        res.json({
          ok: true,
          usuarios,
          count,
        });
      });
    });
});

app.post("/usuario", function (req, res) {
  let body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });
});

app.put("/usuario/:id", function (req, res) {
  let id = req.params.id;

  // Filtra el objeto para que no se pueda modificar la contraseña por ejemplo
  let body = _.pick(req.body, ["nombre", "email", "role", "img", "estado"]);

  // Se añade la opción new para que retorne el nuevo usuario que ha actualizado. RunValidators valida el usuario nuevo
  Usuario.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, newUsuario) => {
      if (err) {
        res.status(400).json({ ok: false, err });
      }

      res.json(newUsuario);
    }
  );
});

app.delete("/usuario/:id", function (req, res) {
  let id = req.params.id;

  /*Usuario.findByIdAndRemove(id, (err, eliminado) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    if (!eliminado) {
      return res.status(400).json({
        ok: false,
        message: "Usuario no encontrado",
      });
    }

    res.json({
      ok: true,
      usuario: eliminado,
    });
  });*/

  // Mejor cambiar el estado antes que borrar el registro
  Usuario.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true },
    (err, newUsuario) => {
      if (err) {
        res.status(400).json({ ok: false, err });
      }

      res.json(newUsuario);
    }
  );
});

module.exports = {
  app,
};
