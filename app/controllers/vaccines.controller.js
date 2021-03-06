const db = require("../models");
const Vaccines = db.vaccines;
const Op = db.Sequelize.Op;

// Create and Save a new vaccines
exports.create = (req, res) => {
  // Validate request
  if (!req.body.vacname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a vaccines
  const vaccines = {
    vacid: req.body.vacid,
    vacname: req.body.vacname,

  };

  // Save vaccines in the database
  Vaccines.create(vaccines)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the vaccines."
      });
    });
};

exports.findAll = (req, res) => {
  const vacname = req.query.vacname;
  var condition = vacname ? { vacname: { [Op.like]: `%${vacname}%` } } : null;

  Vaccines.findAll({ where: condition , 
    include : [{ model : db.takes,
      include: [db.vaccines]}]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vaccine."
      });
    });
};
// Find a single vaccines with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vaccines.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Vaccines with id=" + id
      });
    });
};

// Update a Vaccines by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Vaccines.update(req.body, {
    where: { vacid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vaccines was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Vaccines with id=${id}. Maybe Vaccines was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vaccines with id=" + id
      });
    });
};

// Delete a Vaccines with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Vaccines.destroy({
    where: { vacid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vaccines was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Vaccines with id=${id}. Maybe Vaccines was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vaccines with id=" + id 
      });
    });
};

// Delete all vaccines from the database.
exports.deleteAll = (req, res) => {
  Vaccines.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Vaccines were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vaccines."
      });
    });
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Species.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Species."
//       });
//     });
// };
