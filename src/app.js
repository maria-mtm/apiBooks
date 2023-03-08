const express = require("express");
const cors = require('cors');
const usuarioRouters = require("./routers/usuario.routers");
const librosRouters = require("./routers/libro.routers")
const errorHandling = require("./error/errorHandling");
const app = express();


app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extender: false }));
app.use(express.json());
app.use(usuarioRouters);
app.use(librosRouters);
app.use(function (req, res, next) {
    res.status(404).json({
        error: true,
        codifo: 404,
        message: "Endpoint doesnt found"
    })
})
app.use(errorHandling);

module.exports = app;