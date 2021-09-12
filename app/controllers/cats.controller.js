const db = require("../models");
const Cats = db.cats;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.catid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Cats
  const cats = {
    catid: req.body.catid,
    catname: req.body.catname,
    catimage: req.body.catimage,
    price :   req.body.price,
    gender:  req.body.gender,
    status:  req.body.status,
    dob :  req.body.dob,
    certificateimage: req.body.certificateimage ,
    species_speciesid:  req.body.species_speciesid,
    orders_orderid: req.body.orders_orderid,

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

    Cats.findAll({ where: condition })
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
  
    Cats.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cats with id=" + id
        });
      });
  };
  
  // Update a Cats by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Cats.update(req.body, {
      where: { catid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cats was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cats with id=${id}. Maybe Cats was not found or req.body is empty!`
          });
        }
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