// rutas para consumir el modulo usuarios del SERVICIO ECOMMERCE

const express = require('express');

const router = express.Router();

// instanciamos el controlador correspondiente
const usuariosCtr = require('../controllers/usuarios')

// rutas que entregara el modulo producto

router.get("/usuarios/listartodos", usuariosCtr.listartodos)
router.post("/usuarios/registro", usuariosCtr.registro);
router.get("/usuarios/login", usuariosCtr.login)
/*router.delete("/producto/borrarxid/:id", productoCtr.borrarxid)
router.put("/producto/actualizarxid/:id",  productoCtr.actualizarxid) */
// ........

module.exports = router
