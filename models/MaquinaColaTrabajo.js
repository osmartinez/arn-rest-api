
var mongoose = require('mongoose');var Schema = mongoose.Schema;var MaquinaColaTrabajo = new Schema({posicion: {type: String},agrupacion: {type: String},fechaPrograma: {type: String},personaPrograma: {type: String},ejecucion: {type: String},Maquina: {type: Schema.Types.ObjectId, required: true, ref: 'Maquina'}}); 