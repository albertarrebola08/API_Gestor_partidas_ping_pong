const m_partidas = require('../modelos/m_partidas')
module.exports = {
    leerPartidas : async (req,res)=>{
        // todo el codigo de mongoDB
        try{
            const partidasEncontradas = await m_partidas.find()
            res.json(partidasEncontradas)
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
        
        
    }
,
    leerPartidaId : async (req,res)=>{
        var id = req.params.id
        // todo el codigo de mongoDB
        try{
            const partidaEncontrada = await m_partidas.findById(id)
            res.json({
                error:null,
                data:partidaEncontrada
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
        
        
    }
,
    crearPartida : async (req,res)=>{
        const partida = new m_partidas({
            jugador1:req.body.jugador1,
            jugador1_email:req.body.jugador1_email,
            jugador2:req.body.jugador2,
            jugador1_email:req.body.jugador1_email,
            fecha:req.body.fecha,
            objetivo_puntos:req.body.objetivo_puntos,
            puntos_jugador1:req.body.puntos_jugador1,
            puntos_jugador2:req.body.puntos_jugador2
        })
        //usamos save()
        try{
            //inserta un nuevo partida

            const partidaGuardada = await partida.save()
            res.json({
                error:null,
                data:partidaGuardada
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
    }
    ,
    modificarPartidaId : async (req,res)=>{
        const id = req.params.id
        
        try{
            //inserta un nuevo partida
            const partidaModificada = await m_partidas.findByIdAndUpdate(id,
                {
                    jugador1:req.body.jugador1,
                    jugador2:req.body.jugador2,
                    fecha:req.body.fecha,
                    objetivo_puntos:req.body.objetivo_puntos,
                    puntos_jugador1:req.body.puntos_jugador1,
                    puntos_jugador2:req.body.puntos_jugador2
                })
            res.json({
                error:null,
                data:partidaModificada
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
    }
    ,
    borrarPartidaId : async (req,res)=>{
        var id = req.params.id
        // todo el codigo de mongoDB
        try{
            const partidaBorrada = await m_partidas.findByIdAndDelete(id)
            res.json({
                error:null,
                data:partidaBorrada
            })
        } catch(err){
            res.json({
                mensaje: 'Se ha producido un error' + err
            })
        }
        
        
    }

}