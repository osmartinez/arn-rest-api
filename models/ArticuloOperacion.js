var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticuloOperacion = new Schema({
  numeroOperacion: { type: String },
  numeroOperacionAnterior: [{ type: String }],
  numeroOperacionSiguiente: { type: String },
  descripcion: { type: String },
  observaciones: { type: String },
  codConexion: { type: String },
  mostrarMaterias: { type: Boolean },
  codUtillaje: { type: String },
  tiempoPreparacion: { type: Number },
  tiempoEjecucion: { type: Number },
  tiempoOperario: { type: Number },
  eficiencia: { type: Number },
  costeTiempo: { type: Number },
  costeIndirectoInterno: { type: Number },
  costeOperacion: { type: Number },
  costeIndirectoSubcontrata: { type: Number },
  posibilidadSubcontratar: { type: Boolean },
  posibilidadInterna: { type: Boolean },
  prioridadSubcontratar: { type: Boolean },
  posibilidadInterna: { type: Boolean },
  operacionesTallas: [{ type: ArticuloOperacionTalla }],
  Seccion: { type: Schema.Types.ObjectId, required: true, ref: "Seccion" },
  Operacion: { type: Schema.Types.ObjectId, required: true, ref: "Operacion" },
  Articulo: { type: Schema.Types.ObjectId, required: true, ref: "Articulo" },
});
