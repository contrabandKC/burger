var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
    //   console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// post route -> back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    console.log("test2"+req.body);

    burger.create(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });
  

  // Export routes for server.js to use.
module.exports = router;
