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
    console.log("test2"+ req.body.burger_name);

    burger.create(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      // Send back response and let page reload from .then in Ajax
      res.sendStatus(200);
    });
  });

  router.delete("/burgers/:id", function(req, res) {
    var id = req.params.id
    burger.delete(id, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  

  // Export routes for server.js to use.
module.exports = router;
