const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')
=======
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122

const {
    leerUsuarios,
    leerUsuarioId,
<<<<<<< HEAD
=======
    crearUsuario,
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122
    modificarUsuarioId,
    borrarUsuarioId 
} = require('../controladores/controladorUsuarios')
//SIMULAMOS UNA PETICIÓN A LA BASE DE DATOS

//LEER USUARIOS
router.get('/',leerUsuarios)
//LEER USUARIO con id
router.get('/:id',leerUsuarioId)
//CREAR USUARIO
<<<<<<< HEAD
router.put('/:id',auth, rol(['admin']),modificarUsuarioId)
//BORRAR UN USUARIO
router.delete('/:id',auth, rol(['admin']),borrarUsuarioId)
=======
router.post('/',crearUsuario)
//MODIFICAR UN USUARIO
router.put('/:id',modificarUsuarioId)
//BORRAR UN USUARIO
router.delete('/:id',borrarUsuarioId)
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122



module.exports = router