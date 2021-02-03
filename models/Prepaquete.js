
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Prepaquete = new Schema({talla: {type: String},fechaCreacion: {type: String},codigoEtiqueta: {type: String},cantidades: [{
OrdenFabricacion: {type: Schema.Types.ObjectId, required: true},cantidad: {type: Number, required: true}}],consumos: [{
fecha: {type: Date},OrdenFabricacionOperacion: {type: Schema.Types.ObjectId},Maquina: {type: Schema.Types.ObjectId},Operario: {type: Schema.Types.ObjectId}}]}); 