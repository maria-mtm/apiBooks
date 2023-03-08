const connection = require("../database");

function getLibros(request, response) {

    let sql;
    // • GET “/libros?id_usuario=8&id_libro=10”. Devuelve los datos del libro cuyo id corresponda con el
    // de la BBDD y sea del usuario especificado por su id_usuario.
    if(request.query.id_libro){
       sql= `SELECT * FROM libro WHERE id_libro=${request.query.id_libro} AND id_usuario=${request.query.id_usuario};`
    }
    // • GET “/libros?id_usuario=8”. Devuelve todos los libros almacenados en la BBDD de un usuario.
    else{
    sql=`SELECT * FROM libro WHERE id_usuario=${request.query.id_usuario};`
    }

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })

};


function postNewLibro(request, response) {
    console.log(request.body);
    let sql = `INSERT INTO libro (id_libro,id_usuario, titulo, precio, foto)` +
        `VALUES(${request.body.id_libro},
        ${request.body.id_usuario},
        "${request.body.titulo}",
        ${request.body.precio},
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

function deleteLibro(request, response) {
    console.log(request.body);
    let sql = `DELETE FROM libro WHERE (libro_id = ${request.body.libro_id})`

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


module.exports = {postNewLibro, deleteLibro, getLibros}
