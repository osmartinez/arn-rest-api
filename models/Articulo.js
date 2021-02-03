var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticuloTalla = require("./ArticuloTalla").schema;
var ArticuloDetalleCliente = require("./ArticuloDetalleCliente").schema;

var Articulo = new Schema({
  codigo: { type: String, required: true },
  descripcion: { type: String, required: true },
  unidadMedida: { type: String },
  precio: { type: String },
  bloqueado: { type: Boolean, required: true },
  codigoCliente: { type: String },
  nombreCliente: { type: String },
  modelo: { type: String },
  observaciones: { type: String },
  certificado: { type: Boolean },
  importadoERP: { type: Boolean },
  codFamilia: { type: String },
  codSubFamilia: { type: String },
  grupoTallaActual: { type: String },
  rutaImagen: { type: String },
  ciclo: { type: Number },
  tallas: [{ type: ArticuloTalla }],
  detalleCliente: { type: ArticuloDetalleCliente },
});


module.exports = mongoose.model(
    "Articulo",
    Articulo
  );