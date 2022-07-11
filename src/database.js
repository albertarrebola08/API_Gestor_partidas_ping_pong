
const mongoose = require('mongoose');
const { leerUsuarios } = require('./controladores/controladorUsuarios');

// codigo de conexion con la base de datos mongo db

//nombre de la base de datos
const BD_NAME = 'bd_pingPong'
const BD_USER = 'albertarrebola8'
const BD_PASSWORD = 'trebla8'
const uri = `mongodb+srv://${BD_USER}:${BD_PASSWORD}@cluster0.nkzvv.mongodb.net/${BD_NAME}?retryWrites=true&w=majority`

//creamos la conexion usando el metodo conect de mongoose en la base de datos
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})

var db = mongoose.connection



//exportamos la conexion a la base de datos
module.exports = db