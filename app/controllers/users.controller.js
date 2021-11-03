const db = require("../models");
const Users = db.users;
const bcrypt = require("bcrypt")
const Op = db.Sequelize.Op;


// Create and Save a new user
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const hashPassword = await bcrypt.hash(req.body.password,5)
  // Create a users
  const users = {
    userid: req.body.userid,
    username: req.body.username,
    password: hashPassword,
    role: req.body.role,
    address: req.body.address,
    tel : req.body.tel

  };

  // Save user in the database
  Users.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
};

exports.findAll = (req, res) => {


  Users.findAll({ 
  
    include: [db.orders]
  })
    .then(data => {
      const Arr = data.map(user => ({
        userid : user.userid,
        username : user.username,
        role : user.role,
       address : user.address,
        tel : user.tel}))
      res.json(Arr);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Users.findAll({
    where : {UserId : req.param.id},
    include : [db.orders]
  }
    )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Users with id=" + id
      });
    });
};

// Update a user by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Users.update(req.body, {
    where: { userid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Users was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Users with id=${id}. Maybe Users was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Users with id=" + id
      });
    });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: { userid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Users was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Users with id=${id}. Maybe Users was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Users with id=" + id
      });
    });
};

// Delete all user from the database.
exports.deleteAll = (req, res) => {
    Users.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};
