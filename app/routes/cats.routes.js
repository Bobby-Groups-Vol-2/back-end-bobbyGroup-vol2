const upload = require("../util/multer.js")
module.exports = app => {
    const cats = require("../controllers/cats.controller.js");

    var router = require("express").Router();
  
  
  
    // Retrieve all patterns
    router.get("/", cats.findAll);

    
    router.post("/",upload.single('myFile'),cats.create);
 
    // Retrieve a single cats with id
    router.get("/:id", cats.findOne);
  
    // Update a cats with id
    router.put("/:id", cats.update);
  
    // Delete a cats with id
    router.delete("/:id", cats.delete);
  
    // Delete all cats
    router.delete("/", cats.deleteAll);

    app.use('/api/cats', router);
  };