const express = require('express')
const router = express.Router()

const pacienteController = require('../controllers/pacienteController')
//listar pacientes
router.get('/',pacienteController.list)
//listar un paciente
//agregar paciente nuevo
router.post('/add',pacienteController.save)
//borrar paciente con tabla
router.get('/delete/:idpx',pacienteController.delete)
//actualizar paciente
router.get('/update/:idpx',pacienteController.edit)
router.post('/update/:idpx',pacienteController.update)

module.exports = router

