const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')
=======
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122

const { 
    leerPartidas, 
    leerPartidaId, 
    crearPartida,
    modificarPartidaId, 
    borrarPartidaId
} = require('../controladores/controladorPartidas')
//RUTAS PARTIDAS

    //LEER PARTIDAS
<<<<<<< HEAD
    router.get('/',auth, rol(['registrado']),leerPartidas)
    //LEER PARTIDA concreto id
    router.get('/:id',auth, rol(['registrado']),leerPartidaId)
    //CREAR PARTIDA
    router.post('/',auth, rol(['registrado']),crearPartida)
    //MODIFICAR UN PARTIDA
    router.put('/:id',auth, rol(['registrado']),modificarPartidaId)
    //BORRAR UN PARTIDA
    router.delete('/:id',auth, rol(['registrado']),borrarPartidaId)
=======
    router.get('/',leerPartidas)
    //LEER PARTIDA concreto id
    router.get('/:id',leerPartidaId)
    //CREAR PARTIDA
    router.post('/',crearPartida)
    //MODIFICAR UN PARTIDA
    router.put('/:id',modificarPartidaId)
    //BORRAR UN PARTIDA
    router.delete('/:id',borrarPartidaId)
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122

module.exports = router;