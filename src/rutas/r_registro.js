const express = require('express')

const r_registro = express.Router()

const {nuevoUsuario} = require('../controladores/controladorRegistro')


//añadimos un registro mediante POST
r_registro.post('/',nuevoUsuario)







module.exports = r_registro