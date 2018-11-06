var express = require("express");
var app = express();

// Ignores .ejs extension
app.set("view engine", "ejs");

// When "/" is requested, client will see whatever is on index.ejs
app.get("/", function(req,res){
    res.render("index");
});

// When "/projects" is requested, client will see whatever is on projects.ejs
app.get("/projects", function(req,res){
    res.render("projects");
});

// When "/" is requested, client will see whatever is on contact.ejs
app.get("/contact", function(req,res){
    res.render("contact");
});

// Forces node to start app and listen on default port and ip 
app.listen(80, process.env.IP, function(req,res){
    console.log("####################");
    console.log("## SERVER STARTED ##");
    console.log("####################");
});