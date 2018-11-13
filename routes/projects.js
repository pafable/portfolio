//Create and use router
var express = require("express");
var router = express.Router();

// When "/projects" is requested, client will see whatever is on projects.ejs
router.get("/projects", function(req,res){
    router.render("projects");
});

// Export router
module.exports = router;