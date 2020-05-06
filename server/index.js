// import express
const express = require("express");
// import body parser
const bodyParser = require("body-parser");
// import path
const path = require("path");

//--------------------------------------------------------------------------
// require routes
const routes = require(path.join(__dirname, "routes.js"))

// create app 
let app = express();

app.use(bodyParser.json());

app.use("/", routes);

//--------------------------------------------------------------------------


// choose a port
const port = 3000;
// listen to the app
app.listen(port, ()=> {console.log("Ahoy! I'm listening! at port : " + port)});