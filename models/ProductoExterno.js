
var mongoose = require('mongoose');var Schema = mongoose.Schema;var ProductoExterno = new Schema({numero: {type: String, required: true},cantidad: {type: Number},descripcion: {type: String}}); 