const mongoose = require('mongoose');


//defino schema
var Schema = mongoose.Schema;
// creo instancia de la clase esquema
var EsquemaUsuario = new Schema({
    nombre:String,
    apellidos:String,
    user:String,
    pass:String,
    email:String,
    posicion_ranking:Number,
    partidos_jugados:Number,
    puntos_totales:Number,
    roles:[String]
});

//creo el modelo
var m_usuarios = mongoose.model('m_usuarios',EsquemaUsuario)

module.exports = m_usuarios