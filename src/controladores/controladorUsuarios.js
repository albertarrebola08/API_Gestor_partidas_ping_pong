
const m_usuarios = require('../modelos/m_usuarios')
module.exports = {
    leerUsuarios : async (req,res)=>{
        // todo el codigo de mongoDB
        try{
            const usuariosEncontrados = await m_usuarios.find()
            res.json(usuariosEncontrados)
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
        
        
    }
,
    leerUsuarioId : async (req,res)=>{
        var id = req.params.id
        // todo el codigo de mongoDB
        try{
            const usuarioEncontrado = await m_usuarios.findById(id)
            res.json({
                error:null,
                data:usuarioEncontrado
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
        
        
    }
,
<<<<<<< HEAD
    
    
=======
    crearUsuario : async (req,res)=>{
        const usuario = new m_usuarios({
            nombre:req.body.nombre,
            apellidos:req.body.apellidos,
            email:req.body.email,
            nickname:req.body.nickname,
            posicion_ranking:req.body.posicion_ranking,
            partidos_jugados:req.body.partidos_jugados,
            puntos_totales:req.body.puntos_totales
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
    ,
>>>>>>> 70864a3e58749ae57411226f4bba463bcecec122
    modificarUsuarioId : async (req,res)=>{
        const id = req.params.id
        
        try{
            //inserta un nuevo usuario
            const usuarioModificado = await m_usuarios.findByIdAndUpdate(id,
                {
                    nombre:req.body.nombre,
                    apellidos:req.body.apellidos,
                    email:req.body.email,
                    nickname:req.body.nickname,
                    posicion_ranking:req.body.posicion_ranking,
                    partidos_jugados:req.body.partidos_jugados,
                    puntos_totales:req.body.puntos_totales
                })
            res.json({
                error:null,
                data:usuarioModificado
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
    }
    ,
    borrarUsuarioId : async (req,res)=>{
        var id = req.params.id
        // todo el codigo de mongoDB
        try{
            const usuarioBorrado = await m_usuarios.findByIdAndDelete(id)
            res.json({
                error:null,
                data:usuarioBorrado
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
        
        
    }

}





