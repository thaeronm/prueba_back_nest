/**
 * Controller
 * 
 * Desde aqui se manejaran las rutas del sistema y la inyeccion de los
 * middlewares en las diferentes rutas para las validaciones de los datos,
 * manejo de respuestas, autenticacion, etc.
 */

const express = require('express');
const router = express.Router();

const service = require('./service');

router.get('/', service.findAll);

router.get('/:id', service.findOne);

router.post('/', service.create);

router.patch('/:id', service.update);

router.delete('/:id', service.delete);

module.exports = router;