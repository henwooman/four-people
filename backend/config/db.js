const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'Insa5_JSB_final_1',
    password:'aischool1',
    port:'3307',
    database:'nodejs'
})

conn. connect();

module.exports = conn;