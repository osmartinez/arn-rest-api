const OrdenFabricacion = require('../../models/OrdenFabricacion')
const Articulo = require('../../models/Articulo')
const mongoose  =require('mongoose')

module.exports = function (router){
    router.get('/api/ordenFabricacion',async (req,res)=>{

        try{
            const {id,codigo,acabada,incluirArticulo,incluirTareas,incluirPares,incluirConfiguracionOperacion} = req.query

            const query = {}
            if(id) query._id = mongoose.Types.ObjectId(id)
            if(codigo)query.codigo=codigo
            if(acabada)query.acabada= acabada
    
            const ordenes =await OrdenFabricacion.find(query)
            if(incluirArticulo==='true')
            {
                await Articulo.populate(ordenes,{path: 'Articulo'})
            }
    
            res.body = ordenes
            res.send()
        }catch(err){
            console.error(err)
            res.body={error: String(err)}
            res.send()
        }
        
    })
}