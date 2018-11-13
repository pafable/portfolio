//Create and use router
var express = require("express");
var router = express.Router();

// When "/contact" is requested, client will see whatever is on contact.ejs
router.get("/contact", function(req,res){
    res.render("contact");
});

// Export router
module.exports = router;