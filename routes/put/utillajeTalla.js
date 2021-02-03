const UtillajeTalla = require('../../models/UtillajeTalla')

module.exports = function (router){
    router.put('/api/utillajeTalla',(req,res)=>{
        const utillajeTalla = new UtillajeTalla(req.body)
        utillajeTalla.save()
        res.body = utillajeTalla
        res.send()
    })
}