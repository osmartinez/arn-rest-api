var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrdenFabricacionOperacion = new Schema({
  descripcion: { type: String, required: true },
  codSeccion: { type: String, required: true },
  codUtillaje: { type: String, required: true },
  numeroOperacion: { type: String, required: true },
  numeroOperacionAnterior: [{ type: String, required: true }],
  numeroOperacionSiguiente: { type: String, required: true },
  observaciones: { type: String },
  codConexion: { type: String, required: true },
  tipoProceso: { type: Number },
  tareas: [{ type: Schema.Types.ObjectId, ref: "OrdenFabricacionOperacionTarea" }],
  Seccion: { type: Schema.Types.ObjectId, required: true, ref: "Seccion" },
  Utillaje: { type: Schema.Types.ObjectId, required: true, ref: "Utillaje" },
  
  OrdenFabricacionOperacionConfiguracion: {
    type: Schema.Types.ObjectId,
    ref: "OrdenFabricacionOperacionConfiguracion",
  },
});


module.exports = mongoose.model('OrdenFabricacionOperacion', OrdenFabricacionOperacion);
