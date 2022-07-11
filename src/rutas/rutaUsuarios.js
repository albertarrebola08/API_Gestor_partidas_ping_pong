const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')

const {
    leerUsuarios,
    leerUsuarioId,
    modificarUsuarioId,
    borrarUsuarioId 
} = require('../controladores/controladorUsuarios')
//SIMULAMOS UNA PETICIÓN A LA BASE DE DATOS

//LEER USUARIOS
router.get('/',leerUsuarios)
//LEER USUARIO con id
router.get('/:id',leerUsuarioId)
//CREAR USUARIO
router.put('/:id',auth, rol(['admin']),modificarUsuarioId)
//BORRAR UN USUARIO
router.delete('/:id',auth, rol(['admin']),borrarUsuarioId)



module.exports = router