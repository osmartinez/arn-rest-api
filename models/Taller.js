
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Taller = new Schema({nombre: {type: String, required: true},nif: {type: String},direccion: {type: String},poblacion: {type: String},telefono: {type: String},contacto: {type: String},email: {type: String},apodo: {type: String, required: true},activo: {type: Boolean, required: true}}); 