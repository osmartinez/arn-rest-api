
var mongoose = require('mongoose');var Schema = mongoose.Schema;var MercanciaDeposito = new Schema({taller: {type: String},direccion: {type: String},localidad: {type: String},telefono: {type: String},contacto: {type: String},fechaDeposito: {type: Date},personaEmisora: {type: String},fechaCreacion: {type: Date},observaciones: {type: String},consumido: {type: Boolean}}); 