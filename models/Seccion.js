var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Seccion = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  costeTiempo: { type: Number },
  costeIndirecto: { type: Number },
  costeTiempoSubcontrata: { type: Number },
  costeIndirectoSubcontrata: { type: Number },
  esMolde: { type: Boolean },
  esCorte: { type: Boolean },
  paresPorDia: { type: Number },
  grupo: { type: String },
  codigoEtiqueta: { type: String },
  diasDesfase: { type: Number },
});
module.exports = mongoose.model(
    "Seccion",
    Seccion
  );
  