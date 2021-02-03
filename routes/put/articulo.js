const Articulo = require('../../models/Articulo')

module.exports = function (router){
    router.put('/api/articulo',(req,res)=>{
        const articulo = new Articulo(req.body)
        articulo.save()
        res.body = articulo
        res.send()
    })
}