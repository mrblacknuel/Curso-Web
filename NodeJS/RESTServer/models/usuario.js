const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let rolesValidos = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un rol válido",
};

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correo es necesario"],
  },
  password: {
    type: String,
    required: [true, "El password es necesario"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    default: "USER_ROLE",
    enum: rolesValidos,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

// Se configura el schema para que utilice un plugin particular
usuarioSchema.plugin(uniqueValidator, { message: "{PATH} debe de ser único" });

// Cuando se muestra el usuario como un JSON no mostramos la contraseña
usuarioSchema.methods.toJSON = function () {
  // Antes de devolver el JSON le borra el campo password
  let userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

module.exports = mongoose.model("Usuario", usuarioSchema);
