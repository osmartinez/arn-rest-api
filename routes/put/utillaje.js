const Utillaje = require('../../models/Utillaje')

module.exports = function (router){
    router.put('/api/utillaje',(req,res)=>{
        const utillaje = new Utillaje(req.body)
        utillaje.save()
        res.body = utillaje
        res.send()
    })
}