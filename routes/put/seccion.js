const Seccion = require('../../models/Seccion')

module.exports = function (router){
    router.put('/api/seccion',(req,res)=>{
        const seccion = new Seccion(req.body)
        seccion.save()
        res.body = seccion
        res.send()
    })
}