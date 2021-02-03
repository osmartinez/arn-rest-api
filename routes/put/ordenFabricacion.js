const OrdenFabricacion = require('../../models/OrdenFabricacion')

module.exports = function (router) {
    router.put('/api/ordenFabricacion', (req, res) => {
        const orden = new OrdenFabricacion(req.body)
        orden.save()
        res.body = orden
        res.send()
    })
}