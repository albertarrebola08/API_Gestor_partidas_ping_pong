const express = require('express');
const morgan = require('morgan')
var cors = require('cors')
const app = express();

app.use(cors())

const rutaPartidas = require('./src/rutas/rutaPartidas');
const rutaUsuarios = require('./src/rutas/rutaUsuarios');
<<<<<<< HEAD
const r_registro = require('./src/rutas/r_registro')
const r_login = require('./src/rutas/r_login')
=======
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122

//IMPORTAMOS EL OBJETO DB 
const db = require('./src/database')

//Cuando detecte que la base de datos esá recibiendo datos y funcionando se detecta el evento con el ".on"
db.on('error', function (err) {
    console.log('ERROR EN LA CONEXION DE LA BASE DE DATOS' + err);
})
//detectamos el evento connected cuando todo está ok
db.on('connected', function (){
    console.log('LA BASE DE DATOS ESTÁ CONECTADA');
})


//MIDDLEWARES
//Middleware para la codificación json del cuerpo de las peticiones (body)
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//midleware para las rutas de la api
app.use('/api/usuarios',rutaUsuarios);
app.use('/api/partidas',rutaPartidas) 
<<<<<<< HEAD
app.use('/api/registro',r_registro) 
app.use('/api/login',r_login) 
=======
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122


app.get('/',(req,res)=>{
    res.send('Ruta principal en el puerto seleccionado (8000)')
})
//
//Levantamos servidor en puerto 8000
<<<<<<< HEAD
app.listen(6000,()=>{
    console.log('Escuchando servidor en el puerto 6000',);
=======
app.listen(8000,()=>{
    console.log('Escuchando servidor');
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122
})