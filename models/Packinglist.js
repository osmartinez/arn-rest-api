
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Packinglist = new Schema({cliente: {type: String},fechaCreacion: {type: Date},observaciones: {type: String},agrupacion: {type: String},usuarioCreacion: {type: String}}); 