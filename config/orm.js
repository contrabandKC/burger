var connection = require("../config/connection.js");



var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });},
    
    insertOne: function(burger, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(queryString, [burger], function(err, result){
            console.log("orm insert one test" + burger)
            if (err) {
                throw err;
              }
              cb(result);
             
        });},

    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET devoured = true Where id=?"
        connection.query(queryString, id, function(err, result){
            if (err) {
                throw err;
              }
              cb(result);
             
        });
        
    }

}



module.exports = orm;
