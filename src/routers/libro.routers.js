const { Router } = require("express");
const router = Router();
const libroCtrl = require("../controller/libro.controller");

router.get("/libros", libroCtrl.getLibros);
router.post("/libros", libroCtrl.postNewLibro);
router.delete("/libros", libroCtrl.deleteLibro);

module.exports = router;



