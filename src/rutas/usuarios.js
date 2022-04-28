const express = require('express');
const router = express.Router();

//SIMULAMOS UNA PETICIÓN A LA BASE DE DATOS
const datosSimuladosUsuarios = [
    {
        email:'didojuanjo@gmail.com',
        nombre:"Juanjo",
        apellido:'Dido'
    },
    {
        email:'cuestatemaria@gmail.com',
        nombre:"María",
        apellido:'Cuéstate'
    },
    {
        email:'turbaotomas@gmail.com',
        nombre:"Tomás",
        apellido:'Turbao'
    }
    
]

//peticion get a la ruta localhost:port/api/usuarios --> envia un JSON con los usuarios de la base de datos
router.get('/', (req, res) => {
    res.json(datosSimuladosUsuarios)
})

module.exports = router;