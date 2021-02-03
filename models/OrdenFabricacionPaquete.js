var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrdenFabricacionPaquete = new Schema({
  fechaCreacion: { type: Date, required: true,default: Date.now() },
  cantidad: { type: Number, required: true },
  tipo: { type: String },
  Operario: { type: Schema.Types.ObjectId, ref: "Operario" },
  Maquina: { type: Schema.Types.ObjectId, ref: "Maquina" },
});

module.exports = mongoose.model('OrdenFabricacionPaquete', OrdenFabricacionPaquete);
