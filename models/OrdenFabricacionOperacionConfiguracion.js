var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrdenFabricacionOperacionConfiguracion = new Schema({
  mostrarMaterias: { type: String },
  tiempoPreparacion: { type: String },
  tiempoEjecucion: { type: String },
  tiempoOperario: { type: String },
  eficiencia: { type: String },
  costeTiempo: { type: String },
  costeIndirectoInterno: { type: String },
  costeOperacion: { type: String },
  costeIndirectoSubcontrata: { type: String },
  posibilidadSubcontratar: { type: String },
  posibilidadInterna: { type: String },
  prioridadSubcontratar: { type: String },
  paresHoraEstimados: { type: String },
  costeHoraSubcontrata: { type: String },
  costeConfirmado: { type: String },
});

module.exports = mongoose.model('OrdenFabricacionOperacionConfiguracion', OrdenFabricacionOperacionConfiguracion);
