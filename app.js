var express = require("express");
var app = express();
var contactRoutes = require("./routes/contact");
var projectsRoutes = require("./routes/projects");
var indexRoutes = require("./routes/index");

// Ignores .ejs extension
app.set("view engine", "ejs");

// Grabs current directory and then appends /public
app.use(express.static(__dirname + "/public"));

//Test page
app.get("/hello", function(req,res){
    res.send("hello world");
});

app.use(function(req, res, next) {
    res.send("404");
});

// Separated routes into routes dir
app.use(indexRoutes);
app.use(projectsRoutes);
app.use(contactRoutes);

// Forces node to start app and listen on default port and ip 
app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("####################");
    console.log("## SERVER STARTED ##");
    console.log("####################");
});