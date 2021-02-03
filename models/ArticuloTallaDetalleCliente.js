var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticuloTallaDetalleCliente = new Schema({
  skuMephisto: { type: String },
  suTallaMephisto: { type: String },
  codigoEtiquetaUvex: { type: String },
  suTallaHaix: { type: String },
  codigoEtiquetaMaspica: { type: String },
  ArticuloTalla: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "ArticuloTalla",
  },
});

module.exports = mongoose.model(
    "ArticuloTallaDetalleCliente",
    ArticuloTallaDetalleCliente
  );
  