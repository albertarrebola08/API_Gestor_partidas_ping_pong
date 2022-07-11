const m_usuarios = require('../modelos/m_usuarios')

const bcrypt = require('bcrypt') 

module.exports = {
    nuevoUsuario : async(req,res) => {
        //encriptamos la contrasenya
        const contraseñaEncriptada = await bcrypt.hash(req.body.pass, 10)
        bcrypt.hash(req.body.pass, 10, function(err,hash) {

        })
        usuario = new m_usuarios({
            nombre: req.body.nombre,
            apellidos:req.body.apellidos,
            user: req.body.user,
            pass: contraseñaEncriptada,
            email:req.body.email,
            posicion_ranking:req.body.posicion_ranking,
            partidos_jugados:req.body.partidos_jugados,
            puntos_totales:req.body.puntos_totales,
            roles: ["registrado"],
        })

    //usamos save()
    try{
        //inserta un nuevo usuario
        const usuarioGuardado = await usuario.save()
        res.json({
            error:null,
            data:usuarioGuardado
        })
    } catch(err){
        res.json({
            mensaje: 'Se ha producido un error' + err
        })
    }

    
    }
}
