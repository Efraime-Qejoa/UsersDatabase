// Declarations
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
//Linking people routes
const PeopleRoutes = require("./routes/people");

//Initialising App
var app = express();

app.use(bodyParser.json());

// All routes coming from people will go to people routes
app.use("/people", PeopleRoutes)
//Server Port
app.listen(3000);