const jwt = require("jsonwebtoken");

let verificaToken = (req, res, next) => {
  let token = req.get("token");

  jwt.verify(token, process.env.JWT_SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    req.usuario = decoded.usuario;

    next();
  });
};

// Comprueba si el usuario de la petición es administrador
let verificaAdmin = (req, res, next) => {
  let usuario = req.usuario;

  if (usuario.role === "ADMIN_ROLE") {
    next();
  } else {
    res.status(403).json({
      ok: false,
      err: {
        message: "El usuario que realice la acción debe ser administrador",
      },
    });
  }
};

module.exports = {
  verificaToken,
  verificaAdmin,
};
