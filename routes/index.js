//Create and use router
var express = require("express");
var router = express.Router();

// When "/" is requested, client will see whatever is on index.ejs
app.get("/", function(req,res){
    res.render("index");
});

// Export router
module.exports = router;