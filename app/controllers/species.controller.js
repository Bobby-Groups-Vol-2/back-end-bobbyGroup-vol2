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
    speciesid: req.body.speciesid,
    speciesname: req.body.speciesname,

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
  var condition = speciesname ? { speciesname: { [Op.like]: `%${speciesname}%` } } : null;

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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Species.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Species with id=" + id
      });
    });
};

// Update a Species by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Species.update(req.body, {
    where: { speciesid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Species was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Species with id=${id}. Maybe Species was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating species with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Species.destroy({
    where: { speciesid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Species was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Species with id=${id}. Maybe Species was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Species with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Species.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Species were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Species."
      });
    });
};
