const db = require("../models");
const Cats = db.cats;

const Op = db.Sequelize.Op;
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