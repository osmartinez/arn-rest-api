var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Bancada = new Schema({
  nombre: { type: String },
  activa: { type: Boolean },
  tiempoDesplazamiento: { type: Number },
  tiempoObjetivo: { type: Number },
  porcentajeDesviacion: { type: Number },
  ciclo: { type: Number },
  correctorBancada: { type: Number },
  tiempoMaquina: { type: Number },
  tiempoOperario: { type: Number },
  ritmo: { type: Number },
  cicloSegundos: { type: Number },
});
