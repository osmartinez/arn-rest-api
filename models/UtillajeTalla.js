var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UtillajeTalla = new Schema({
  talla: { type: String, required: true },
  productividad: { type: Number },
  dimensionX: { type: Number },
  dimensionY: { type: Number },
  posicion: { type: Number },
  totalComponentes: { type: Number },
  impresionMarcaje1: { type: String },
  impresionMarcaje2: { type: String },
  impresionMarcaje3: { type: String },
  ficheroImpresionMarcaje: { type: String },
  Utillaje: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Utillaje",
  },
});

module.exports = mongoose.model(
    "UtillajeTalla",
    UtillajeTalla
  );