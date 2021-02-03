const UtillajeTallaColeccion = require('../../models/UtillajeTalla')

module.exports = function (router){
    router.put('/api/utillajeTallaColeccion',(req,res)=>{
        const utillajeTallaColeccion = new UtillajeTallaColeccion(req.body)
        utillajeTallaColeccion.save()
        res.body = utillajeTallaColeccion
        res.send()
    })
}