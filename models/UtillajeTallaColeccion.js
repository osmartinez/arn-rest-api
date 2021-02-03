var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UtillajeTallaColeccion = new Schema({
  codigoEtiqueta: { type: String },
  activo: { type: Boolean, required: true },
  estado: { type: String },
  componente: { type: String },
  fechaCreacion: { type: Date, required: true,default: Date.now() },
  usuarioCreacion: { type: String, required: true },
  codigoContenedor: { type: String },
  rendimiento: { type: Number },
  Contenedor: {
    type: Schema.Types.ObjectId,
    ref: "Contenedor",
  },
  UtillajeTalla: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "UtillajeTalla",
  },
});


module.exports = mongoose.model(
    "UtillajeTallaColeccion",
    UtillajeTallaColeccion
  );