// Declarations
const mysql = require('mysql');

// Establishing database connection
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Hacker7564!",
    database : "DatabaseExample",
    multipleStatements : true
});
// Checking state of Database (Connected or not)
mysqlConnection.connect((err)=>{
    if(!err) {
        console.log("Connected");
    }
    else {
        console.log("Connection Failed");
    }
});

module.exports = mysqlConnection;