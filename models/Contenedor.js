
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Contenedor = new Schema({codigoEtiqueta: {type: String},fechaAsociacion: {type: String},codigoAgrupacion: {type: String},fechaAgrupacion: {type: String},tipo: {type: String},codigoUbicacion: {type: String},Ubicacion: {type: Schema.Types.ObjectId, ref: 'Ubicacion'},PackingPallet: {type: Schema.Types.ObjectId, ref: 'PackingPallet'}}); 