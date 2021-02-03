var mongoose = require("mongoose");
const OrdenFabricacionPaquete = require("./OrdenFabricacionPaquete").schema;
var Schema = mongoose.Schema;

var OrdenFabricacionOperacionTarea = new Schema({
  numeroOperacion: { type: String, required: true },
  tallaUtillaje: { type: String, required: true },
  numeroOperacionAnterior: { type: String },
  numeroOperacionSiguiente: { type: String },
  tallas: [{ type: String, required: true }],
  productividadCalculada: { type: Number },
  productividadTallaUtillaje: { type: Number },

  cantidadFabricar: { type: Number, required: true },
  cantidadProducida: { type: Number },
  cantidadSaldos: { type: Number, required: true },
  cantidadDefectuosa: { type: Number },
  estado: { type: String, required: true },
  finalizada: { type: Boolean, required: true },
  estadoAnterior: { type: String },
  paquetes: [{type: OrdenFabricacionPaquete}],
  UtillajeTalla: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "UtillajeTalla",
  },

  OrdenFabricacionOperacion:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "OrdenFabricacionOperacion"
  },

  

});
module.exports = mongoose.model('OrdenFabricacionOperacionTarea', OrdenFabricacionOperacionTarea);
