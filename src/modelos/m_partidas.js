const mongoose = require('mongoose');

//defino schema object
var Schema = mongoose.Schema;
//creo instancia de la clase esquema (objeto) para poder usarla en el modelo
var EsquemaPartida = new Schema(
    {
        jugador1:String,
        jugador1_email:String,
        jugador2:String,
        jugador2_email:String,
        fecha:Date,
        objetivo_puntos:Number,
        puntos_jugador1:Number,
        puntos_jugador2:Number

    })

    //creo el MODELO 
    var m_partidas = mongoose.model('m_partidas',EsquemaPartida)

    //exporto el modelo 
    module.exports = m_partidas;