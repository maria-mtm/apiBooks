
const connection = require("../database");

function postNewUsuario(request, response) {
    console.log(request.body);
    let sql = `INSERT INTO usuario (id_usuario, nombre, apellidos, correo, foto)` +
        `VALUES(${request.body.id_usuario},
        "${request.body.nombre}",
        "${request.body.apellidos}",
        "${request.body.correo}",
        "${request.body.foto}")`;
    console.log(sql);

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
};

function postLoginUsuario(request, response) {
    console.log(request.body);
    let sql;
    if (request.body.correo == null){
    response.send("Este usuario no existe")
    }else{
    sql = `SELECT * FROM usuario WHERE correo= "${request.body.correo}"`;
    }
    console.log(sql);

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
};

module.exports = { postNewUsuario, postLoginUsuario}