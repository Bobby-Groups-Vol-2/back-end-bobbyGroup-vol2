module.exports = app => {
    const owns = require("../controllers/owns.controller.js");
  
    var router = require("express").Router();
  
    // Create a new patterns
    router.post("/", owns.create);
  
    // Retrieve all patterns
    router.get("/", owns.findAll);


 
 
    app.use('/api/owns', router);
  };