
var mongoose = require('mongoose');var Schema = mongoose.Schema;var ArticuloMaterial = new Schema({codMateria: {type: String, required: true},referenciaERP: {type: String},articuloInterno: {type: Boolean},descripcion: {type: String, required: true},observaciones: {type: String},unidadMedida: {type: String},cantidad: {type: Number},precio: {type: Number},costeIndirecto: {type: Number},codConexion: {type: String},mostrarEnOperaciones: {type: Boolean},fabricarStock: {type: Boolean},Articulo: {type: Schema.Types.ObjectId, required: true, ref: 'Articulo'}}); 