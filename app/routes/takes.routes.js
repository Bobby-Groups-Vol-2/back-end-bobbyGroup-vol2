module.exports = app => {
    const takes = require("../controllers/takes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new patterns
    router.post("/", takes.create);
  
    // Retrieve all patterns
    router.get("/", takes.findAll);

 
 
    app.use('/api/takes', router);
  };