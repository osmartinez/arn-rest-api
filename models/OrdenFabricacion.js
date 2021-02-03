var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrdenFabricacionOperacion = require("./OrdenFabricacionOperacion").schema;
var OrdenFabricacionPaquete = require("./OrdenFabricacionPaquete").schema;

var OrdenFabricacion = new Schema({
  codigo: { type: String, required: true },
  fechaEntrega: { type: Date },
  prioridad: { type: Number },
  acabada: { type: Boolean, required: true },
  codigoArticulo: { type: String, required: true },
  idPedidoERP: { type: Number },
  lineasPosicionERP: { type: String },
  fechaEntregaERP: { type: Date },
  observaciones: { type: String },
  fechaCreacion: { type: Date, required: true },
  revision: { type: Number, required: true },
  fechaFinalizado: { type: Date },
  tipo: { type: String, required: true },
  agrupacion: { type: String },
  fechaPedido: { type: Date },
  nombreCliente: { type: String },
  domicilioEnvio: { type: String },
  lineaPedidoERP: { type: String },
  descripcionArticuloERP: { type: String },
  suModeloExpedicionERP: { type: String },
  observacionesExpedicionERP: { type: String },
  razonSocialERP: { type: String },
  operaciones: [{ type: OrdenFabricacionOperacion }],
  Articulo: { type: Schema.Types.ObjectId, required: true, ref: "Articulo" },
});

module.exports = mongoose.model(
  "OrdenFabricacion",
  OrdenFabricacion
);
