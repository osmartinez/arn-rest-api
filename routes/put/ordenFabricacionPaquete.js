const OrdenFabricacionPaquete = require('../../models/OrdenFabricacionPaquete')
const OrdenFabricacionOperacionTarea = require('../../models/OrdenFabricacionOperacionTarea')
module.exports = function (router) {
    router.put('/api/ordenFabricacionPaquete', async (req, res) => {
        const {idOrdenFabricacionOperacionTarea} = req.query
        const ordenFabricacionPaquete = new OrdenFabricacionPaquete(req.body)
        const tarea = await OrdenFabricacionOperacionTarea.findById(idOrdenFabricacionOperacionTarea)
        tarea.paquetes.push(ordenFabricacionPaquete)
        tarea.cantidadProducida += ordenFabricacionPaquete.cantidad
        if(tarea.cantidadProducida>=tarea.cantidadFabricar){
            tarea.estado = 'acabada'
            tarea.finalizada = true
        }
        else{
            tarea.estado = 'proceso'
            tarea.finalizada = false
        }
        tarea.save()

        res.body = tarea
        res.send()
    })
}