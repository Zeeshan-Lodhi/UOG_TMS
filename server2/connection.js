var mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shani',
    database: 'uog_transport'
});
module.exports = { con }
