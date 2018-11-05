var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("Hello World");
});

app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("####################");
    console.log("## SERVER STARTED ##");
    console.log("####################");
});