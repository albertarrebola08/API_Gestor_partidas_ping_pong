const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')

const { 
    leerPartidas, 
    leerPartidaId, 
    crearPartida,
    modificarPartidaId, 
    borrarPartidaId
} = require('../controladores/controladorPartidas')
//RUTAS PARTIDAS

    //LEER PARTIDAS
    router.get('/',auth, rol(['registrado']),leerPartidas)
    //LEER PARTIDA concreto id
    router.get('/:id',auth, rol(['registrado']),leerPartidaId)
    //CREAR PARTIDA
    router.post('/',auth, rol(['registrado']),crearPartida)
    //MODIFICAR UN PARTIDA
    router.put('/:id',auth, rol(['registrado']),modificarPartidaId)
    //BORRAR UN PARTIDA
    router.delete('/:id',auth, rol(['registrado']),borrarPartidaId)

module.exports = router;