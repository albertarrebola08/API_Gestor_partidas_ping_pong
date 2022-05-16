const express = require('express');
const router = express.Router();

const { 
    leerPartidas, 
    leerPartidaId, 
    crearPartida,
    modificarPartidaId, 
    borrarPartidaId
} = require('../controladores/controladorPartidas')
//RUTAS PARTIDAS

    //LEER PARTIDAS
    router.get('/',leerPartidas)
    //LEER PARTIDA concreto id
    router.get('/:id',leerPartidaId)
    //CREAR PARTIDA
    router.post('/',crearPartida)
    //MODIFICAR UN PARTIDA
    router.put('/:id',modificarPartidaId)
    //BORRAR UN PARTIDA
    router.delete('/:id',borrarPartidaId)

module.exports = router;