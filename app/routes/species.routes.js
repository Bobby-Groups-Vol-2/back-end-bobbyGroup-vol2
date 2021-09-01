module.exports = app => {
    const species = require("../controllers/species.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", species.create);
  
    // Retrieve all Tutorials
    router.get("/", species.findAll);

 
    app.use('/api/species', router);
  };