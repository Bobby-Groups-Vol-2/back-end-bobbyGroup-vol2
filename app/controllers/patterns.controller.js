const db = require("../models");
const Patterns = db.patterns;
const Op = db.Sequelize.Op;

// Create and Save a new Patterns
exports.create = (req, res) => {
  // Validate request
  if (!req.body.patternname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a pattern
  const patterns = {
    patternid: req.body.patternid,
    patternname: req.body.patternname,

  };

  // Save pattern in the database
  Patterns.create(patterns)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pattern."
      });
    });
};

exports.findAll = (req, res) => {
  const patternname = req.query.patternname;
  var condition = patternname ? { patternname: { [Op.like]: `%${patternname}%` } } : null;

  Patterns.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pattern."
      });
    });
};

// Find a single pattern with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Patterns.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving pattern with id=" + id
      });
    });
};

// Update a pattern by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Patterns.update(req.body, {
    where: { patternid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "pattern was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update pattern with id=${id}. Maybe pattern was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating pattern with id=" + id
      });
    });
};

// Delete a pattern with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Patterns.destroy({
    where: { patternid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "pattern was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete pattern with id=${id}. Maybe pattern was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete pattern with id=" + id
      });
    });
};

// Delete all pattern from the database.
exports.deleteAll = (req, res) => {
    Patterns.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} pattern were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pattern."
      });
    });
};
