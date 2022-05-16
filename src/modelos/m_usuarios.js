const mongoose = require('mongoose');


//defino schema
var Schema = mongoose.Schema;
// creo instancia de la clase esquema
var EsquemaUsuario = new Schema({
    nombre:String,
    apellidos:String,
    email:String,
    nickname:String,
    posicion_ranking:Number,
    partidos_jugados:Number,
    puntos_totales:Number
});

//creo el modelo
var m_usuarios = mongoose.model('m_usuarios',EsquemaUsuario)

module.exports = m_usuarios