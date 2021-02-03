var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Utillaje = new Schema({
  codigo: { type: String, required: true },
  descripcion: { type: String },
  observaciones: { type: String },
  modelo: { type: String },
  cliente: { type: String },
  estado: { type: String },
  habilitado: { type: Boolean, required: true },
});
module.exports = mongoose.model(
    "Utillaje",
    Utillaje
  );
  