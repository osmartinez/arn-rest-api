var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrdenFabricacionPaquete = require('./OrdenFabricacionPaquete').schema

var OrdenFabricacionOperacionTallaCantidad = new Schema({
  cantidadFabricar: { type: Number, required: true },
  cantidadProducida: { type: Number },
  cantidadSaldos: { type: Number, required: true },
  cantidadDefectuosa: { type: Number },
  estado: { type: String, required: true },
  finalizado: { type: Boolean, required: true },
  estadoAnterior: { type: String },
  paquetes: [{ type: OrdenFabricacionPaquete }],
  OrdenFabricacionOperacionTalla: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "OrdenFabricacionOperacionTalla",
  },
});


module.exports = mongoose.model('OrdenFabricacionOperacionTallaCantidad', OrdenFabricacionOperacionTallaCantidad);
