
function Route(router){

    require('./routes/post/ordenFabricacion')(router)
    require('./routes/post/articulo')(router)

    require('./routes/get/ordenFabricacion')(router)

    return router
}

module.exports = Route