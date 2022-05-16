const express = require('express');
const router = express.Router();

const {
    leerUsuarios,
    leerUsuarioId,
    crearUsuario,
    modificarUsuarioId,
    borrarUsuarioId 
} = require('../controladores/controladorUsuarios')
//SIMULAMOS UNA PETICIÓN A LA BASE DE DATOS

//LEER USUARIOS
router.get('/',leerUsuarios)
//LEER USUARIO con id
router.get('/:id',leerUsuarioId)
//CREAR USUARIO
router.post('/',crearUsuario)
//MODIFICAR UN USUARIO
router.put('/:id',modificarUsuarioId)
//BORRAR UN USUARIO
router.delete('/:id',borrarUsuarioId)



module.exports = router