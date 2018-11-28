//Create and use router
var express = require("express");
var router = express.Router();

// 404 Route not found 
router.use(function(req, res, next) {
    res.render("404");
});

// 500 Route for internal server error
router.use(function(err, req, res, next) {
    res.send("INTERNAL SERVER ERROR");
  });

// Export router
module.exports = router;