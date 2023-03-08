
const mysql = require('mysql2')


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "poiu",
    database: "appbooks"
});

connection.connect(function (err, res) {
    if (err) console.log(err);
    else console.log("MySQL Database connected!");
});

module.exports = connection;

