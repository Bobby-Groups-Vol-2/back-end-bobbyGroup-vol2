const db = require("../models");
const Takes = db.takes;

exports.create = (req, res) => {
  const takes = {
    cats_catid: req.body.cats_catid,
    vaccines_vacid: req.body.vaccines_vacid
   };

  // Save orders in the database
  Takes.create(takes)
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
    Takes.findAll(
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

  