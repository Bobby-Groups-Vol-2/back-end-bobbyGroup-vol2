module.exports = app => {
    const vaccines = require("../controllers/vaccines.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", vaccines.create);
  
    // Retrieve all Tutorials
    router.get("/", vaccines.findAll);

     // Retrieve a single Tutorial with id
     router.get("/:id", vaccines.findOne);
  
     // Update a Tutorial with id
     router.put("/:id", vaccines.update);
   
     // Delete a Tutorial with id
     router.delete("/:id", vaccines.delete);
   
     // Delete all Tutorials
     router.delete("/", vaccines.deleteAll);
 
    app.use('/api/vaccines', router);
  };