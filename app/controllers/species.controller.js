const db = require("../models");
const Species = db.species;
const Op = db.Sequelize.Op;

// Create and Save a new species
exports.create = (req, res) => {
  // Validate request
  

  // Create a species
  const species = {
    speciesid: req.body.speciesid,
    speciesname: req.body.speciesname,
    owns : req.body.owns
  };

  // Save species in the database
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

  Species.findAll({ where: condition ,
          include : [{ model : db.owns,
                        include: [db.species,db.patterns]}] })
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

// Find a single species with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Species.findAll({
    where : {speciesid : id},
    include : [{ model : db.owns,
      include: [db.species,db.patterns]}]
  })
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

// Delete a species with the specified id in the request
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

// Delete all species from the database.
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
