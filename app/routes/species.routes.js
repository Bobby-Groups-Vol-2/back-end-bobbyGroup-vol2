module.exports = app => {
    const species = require("../controllers/species.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", species.create);
  
    // Retrieve all Tutorials
    router.get("/", species.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", species.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", species.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", species.delete);
  
    // Delete all Tutorials
    router.delete("/", species.deleteAll);

 
    app.use('/api/species', router);
  };