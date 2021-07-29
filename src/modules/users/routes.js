/**
 * Index
 *
 * Desde aqui se manejaran las rutas del sistema y la inyeccion de los
 * middlewares en las diferentes rutas para las validaciones de los datos,
 * manejo de respuestas, autenticacion, etc.
 */

const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/", controller.findOne);

router.get("/:id", controller.findOne);

router.post("/", controller.create);

router.patch("/:id", controller.update);

router.delete("/:id", controller.delete);

module.exports = router;