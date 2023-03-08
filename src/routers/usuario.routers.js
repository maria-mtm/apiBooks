const { Router } = require("express");
const router = Router();
const usuarioCtrl = require("../controller/usuario.controller");

router.post("/registro", usuarioCtrl.postNewUsuario);
router.post("/login", usuarioCtrl.postLoginUsuario);

module.exports = router;



