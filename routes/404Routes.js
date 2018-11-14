//Create and use router
var express = require("express");
var router = express.Router();

// 404 Route not found 
router.use(function(req, res, next) {
    res.render("404");
});

// Export router
module.exports = router;