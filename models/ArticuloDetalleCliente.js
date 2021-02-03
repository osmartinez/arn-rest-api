var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticuloDetalleCliente = new Schema({
  suDescripcionMephisto: { type: String },
  suUnidadMedidaMephisto: { type: String },
  suReferenciaMephisto: { type: String },
  suDescripcionHaix: { type: String },
  suColorHaix: { type: String },
  suCodigoColorHaix: { type: String },
  suNumeroMaterialHaix: { type: String },
  suUnidadMedidaHaix: { type: String },
  suDescripcionMaspica: { type: String },
  suColorMaspica: { type: String },
  suDescripcionElten: { type: String },
  Articulo: { type: Schema.Types.ObjectId, required: true, ref: "Articulo" },
});


module.exports = mongoose.model(
    "ArticuloDetalleCliente",
    ArticuloDetalleCliente
  );
