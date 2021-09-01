module.exports = app => {
    const vaccines = require("../controllers/vaccines.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", vaccines.create);
  
    // Retrieve all Tutorials
    router.get("/", vaccines.findAll);

 
    app.use('/api/vaccines', router);
  };