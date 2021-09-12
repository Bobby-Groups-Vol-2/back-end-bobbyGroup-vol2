const db = require("../models");
const Orders = db.orders;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.users_userid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a orders
  const orders = {
    orderid: req.body.orderid,
    users_userid: req.body.users_userid
   

  };

  // Save orders in the database
  Orders.create(orders)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the orders."
      });
    });
};




exports.findAll = (req, res) => {
    const orderid = req.query.orderid;
    var condition = orderid ? { orderid: { [Op.like]: `%${orderid}%` } } : null;

    Orders.findAll({ where: condition })
      .then(data => {
         
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Orders."
        });
      });
  };
  // Find a single Orders with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Orders.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Orders with id=" + id
      });
    });
};

// Update a orders by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Orders.update(req.body, {
    where: { Orderid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Orders was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Orders with id=${id}. Maybe Orders was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating orders with id=" + id
      });
    });
};

// Delete a orders with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Orders.destroy({
    where: { Orderid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Orders was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Orders with id=${id}. Maybe Orders was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Orders with id=" + id
      });
    });
};

// Delete all orders from the database.
exports.deleteAll = (req, res) => {
  Orders.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Orders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Orders."
      });
    });
};