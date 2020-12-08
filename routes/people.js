//Var Declarations
const express = require('express');
const Router = express.Router();
const mysqlConnection = require("../connection");

//What the webpage will show = Information on database
Router.get("/", (req, res) =>{
    mysqlConnection.query("SELECT * from people", (err, rows, fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else 
        {
            console.log(err)
        }
    })
});
//Used to export functions, objects or primitive values from one module to another
module.exports = Router;