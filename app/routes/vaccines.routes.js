module.exports = app => {
    const vaccines = require("../controllers/vaccines.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vaccines
    router.post("/", vaccines.create);
  
    // Retrieve all vaccines
    router.get("/", vaccines.findAll);

     // Retrieve a single vaccines with id
     router.get("/:id", vaccines.findOne);
  
     // Update a vaccines with id
     router.put("/:id", vaccines.update);
   
     // Delete a vaccines with id
     router.delete("/:id", vaccines.delete);
   
     // Delete all vaccines
     router.delete("/", vaccines.deleteAll);
 
    app.use('/api/vaccines', router);
  };