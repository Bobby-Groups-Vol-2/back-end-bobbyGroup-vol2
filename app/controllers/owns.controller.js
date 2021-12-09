const db = require("../models");
const Owns = db.owns;

exports.create = (req, res) => {
  const owns = {
    species_speciesid: req.body.species_speciesid,
    patterns_patternid: req.body.patterns_patternid
   };

  // Save orders in the database
  Owns.create(owns)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Owns."
      });
    });
};
exports.findAll = (req, res) => {
    Owns.findAll(
             )
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

  