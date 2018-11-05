var express = require("express");
var app = express();

// Ignores .ejs extension
app.set("view engine", "ejs");

// when "/" is requested, client will see "hello World"
app.get("/", function(req,res){
    res.send("Hello World");
});

// forces node to start app and listen on default port and ip 
app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("####################");
    console.log("## SERVER STARTED ##");
    console.log("####################");
});