
function Route(router){

    require('./routes/put/ordenFabricacion')(router)
    require('./routes/put/ordenFabricacionOperacionTarea')(router)
    require('./routes/put/ordenFabricacionPaquete')(router)
    require('./routes/put/articulo')(router)
    require('./routes/put/seccion')(router)
    require('./routes/put/utillaje')(router)
    require('./routes/put/utillajeTalla')(router)
    require('./routes/put/utillajeTallaColeccion')(router)

    require('./routes/get/ordenFabricacion')(router)

    return router
}

module.exports = Route