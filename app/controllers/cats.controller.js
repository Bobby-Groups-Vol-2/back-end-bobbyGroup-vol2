
const db = require("../models");
const Cats = db.cats;
const { QueryTypes, json } = require('sequelize');
const Op = db.Sequelize.Op;

exports.create = (req, res,next) => {
  // Validate request
  const file = req.file
  console.log(file);
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
 

  // Create a Cats
  const cats = {
    catid: req.body.catid,
    catname: req.body.catname,
    catimage: file.filename,
    price: req.body.price,
    gender: req.body.gender,
    status: req.body.status,
    dob: req.body.dob,
    certificateimage: req.body.certificateimage,
    orders_orderid: req.body.orders_orderid,
    species_speciesid: req.body.species_speciesid
  };

  // Save Cats in the database
  Cats.create(cats)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cats."
      });
    });
};

exports.findAll = (req, res) => {
  const catid = req.query.catid;
 
  var condition = catid ? { catid: { [Op.like]: `%${catid}%` } } : null;

  Cats.findAll({
    where: condition,
   include: [db.species ]
    
   
  
  })
    .then(data => {
      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cats."
      });
    });
};
exports.findImage = (req, res) => {
  const catimage = req.query.catimage;
 
  var imagfile = `../uploads/{$catimage}`

  Cats.findAll({
    where: imagfile,

    
   
  
  })
    .then(data => {
      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cats."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cats.findAll({
    where: { Catid: id }
    , include: [db.species]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cats with id=" + id
      });
    });
};
const  findCatId =  (catid) =>{

  return  db.sequelize.query('SELECT * FROM cats WHERE cats.catid = :catid',  {
     replacements: {catid : catid},
     type: QueryTypes.SELECT
   })
   
 }
 
// Update a Cats by the id in the request
exports.update = async (req, res) => {
  const file = req.file
  const id = req.params.id;
 const founded =  await findCatId(id)
 console.log(file);
if(founded.length == 0){
 return res.status(404).send("unfounded")
}
  Cats.update({...req.body,catimage:file.filename}, {
    where: { catid: id },
   
}).then(num => { 
     
      
        res.send({
          message: "Cats was updated successfully."
          
        });
     
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cats with id=" + id
      });
    });
};

// Delete a Cats with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cats.destroy({
    where: { catid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cats was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Cats with id=${id}. Maybe Cats was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cats with id=" + id
      });
    });
};

// Delete all Cats from the database.
exports.deleteAll = (req, res) => {
  Cats.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cats were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cats."
      });
    });
};