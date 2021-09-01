const db = require("../models");
const Species = db.species;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.speciesname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const species = {
    vacid: req.body.speciesid,
    vacname: req.body.speciesname,

  };

  // Save Tutorial in the database
  Species.create(species)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the species."
      });
    });
};

exports.findAll = (req, res) => {
  const speciesname = req.query.speciesname;
  var condition = speciesname ? { vacname: { [Op.like]: `%${speciesname}%` } } : null;

  Species.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving species."
      });
    });
};

