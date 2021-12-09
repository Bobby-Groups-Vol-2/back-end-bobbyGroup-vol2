module.exports = app => {
    const patterns = require("../controllers/patterns.controller.js");
  
    var router = require("express").Router();
  
    // Create a new patterns
    router.post("/", patterns.create);
  
    // Retrieve all patterns
    router.get("/", patterns.findAll);

    // Retrieve a single patterns with id
    router.get("/:id", patterns.findOne);
  
    // Update a patterns with id
    router.put("/:id", patterns.update);
  
    // Delete a patterns with id
    router.delete("/:id", patterns.delete);
  
    // Delete all patterns
    router.delete("/", patterns.deleteAll);

 
    app.use('/api/patterns', router);
  };