const db = require("../models");
const Vaccines = db.vaccines;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.vacname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const vaccines = {
     vacid : req.body.vacid ,
    vacname: req.body.vacname,
    
  };

  // Save Tutorial in the database
  Vaccines.create(vaccines)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {
  const vacname = req.query.vacname;
  var condition = vacname ? { vacname: { [Op.like]: `%${vacname}%` } } : null;

  Vaccines.findAll({ where: condition })
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

