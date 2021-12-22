const mysql = require('mysql2');

const dbcon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tutoria2'
});
dbcon.connect();
module.exports = dbcon;