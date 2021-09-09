module.exports = app => {
    const species = require("../controllers/species.controller.js");
  
    var router = require("express").Router();
  
    // Create a new species
    router.post("/", species.create);
  
    // Retrieve all species
    router.get("/", species.findAll);

    // Retrieve a single species with id
    router.get("/:id", species.findOne);
  
    // Update a species with id
    router.put("/:id", species.update);
  
    // Delete a species with id
    router.delete("/:id", species.delete);
  
    // Delete all species
    router.delete("/", species.deleteAll);

 
    app.use('/api/species', router);
  };