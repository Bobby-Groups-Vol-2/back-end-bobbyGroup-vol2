module.exports = app => {
    const cats = require("../controllers/cats.controller.js");
  
    var router = require("express").Router();
  
  
  
    // Retrieve all patterns
    router.get("/", cats.findAll);

    // router.post("/",orders.create);
 
    // // Retrieve a single orders with id
    // router.get("/:id", orders.findOne);
  
    // // Update a orders with id
    // router.put("/:id", orders.update);
  
    // // Delete a orders with id
    // router.delete("/:id", orders.delete);
  
    // // Delete all orders
    // router.delete("/", orders.deleteAll);

    app.use('/api/cats', router);
  };