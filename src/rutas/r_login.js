const express = require('express')
const r_login = express.Router()
const {anyadeDatosLogin} = require('../controladores/controladorLogin')





//añade mediante el body con POST un obj con usuario y contraseña
r_login.post('/',anyadeDatosLogin)

module.exports = r_login