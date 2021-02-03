const OrdenFabricacionOperacionTarea = require('../../models/OrdenFabricacionOperacionTarea')
const OrdenFabricacion = require('../../models/OrdenFabricacion')
const mongoose = require('mongoose')
module.exports = function (router) {
    router.put('/api/ordenFabricacionOperacionTarea', async (req, res) => {
        const tarea = new OrdenFabricacionOperacionTarea(req.body)
        console.log(tarea.OrdenFabricacionOperacion)
        const orden = await OrdenFabricacion.findOne({"operaciones._id":mongoose.Types.ObjectId(tarea.OrdenFabricacionOperacion)})
        const ofo = orden.operaciones.find(ofo=> String(ofo._id) === String(tarea.OrdenFabricacionOperacion))
        ofo.tareas.push(tarea._id)
        
        tarea.save()
        orden.save()

        res.body = tarea
        res.send()
    })
}