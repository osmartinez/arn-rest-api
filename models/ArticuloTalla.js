var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticuloTallaDetalleCliente = require("./ArticuloTallaDetalleCliente").schema;

var ArticuloTalla = new Schema({
  talla: { type: String },
  posicion: { type: String },
  detalleCliente: { type: ArticuloTallaDetalleCliente },
});

module.exports = mongoose.model(
    "ArticuloTalla",
    ArticuloTalla
  );
