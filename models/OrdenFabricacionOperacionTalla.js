var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrdenFabricacionOperacionTallaCantidad = require('./OrdenFabricacionOperacionTallaCantidad').schema

var OrdenFabricacionOperacionTalla = new Schema({
  numeroOperacion: { type: String, required: true },
  tallaUtillaje: { type: String, required: true },
  numeroOperacionAnterior: { type: String },
  numeroOperacionSiguiente: { type: String },
  tallas: [{ type: String, required: true }],
  productividadCalculada: { type: Number },
  productividadTallaUtillaje: { type: Number },
  operacionesTallasCantidad: { type: OrdenFabricacionOperacionTallaCantidad },
  UtillajeTalla: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "UtillajeTalla",
  },
  OrdenFabricacionOperacion: {
    type: Schema.Types.ObjectId,
    ref: "OrdenFabricacionOperacion",
  },
});
module.exports = mongoose.model('OrdenFabricacionOperacionTalla', OrdenFabricacionOperacionTalla);
