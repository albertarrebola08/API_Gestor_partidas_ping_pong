const express = require('express');
const partidas = require('./src/rutas/partidas');
const usuarios = require('./src/rutas/usuarios');
const app = express();


//MIDDLEWARE
app.use('/web',express.static(__dirname + '/src/public'));

//midleware para las rutas de la api
app.use('/api/partidas',partidas)
app.use('/api/usuarios',usuarios)

// app.get('/*', (req, res) => {
//     res.status(404)
//     res.send('Página no encontrada -- ERROR 404')
// })


//ESCUCHAMOS DESDE EL SERVIDOR
app.listen(8000,()=>{
    console.log('Escuchando servidor...')
})  