const OrdenFabricacion = require('../../models/OrdenFabricacion')

module.exports = function (router) {
    router.post('/api/ordenFabricacion', (req, res) => {
        const orden = new OrdenFabricacion(req.body)
        orden.save()
        res.body = { msg: 'hola' }
        res.send()
    })
}