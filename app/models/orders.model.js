 const Users = require("./users.model.js")
 const Cats = require("./cats.model.js")
module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
        orderid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        users_userid: {
        type: Sequelize.INTEGER,
        reference: {
            model: Users,
            key : id
        }
      },
      cats_catid:{
        type: Sequelize.INTEGER,
        reference: {
            model: Cats,
            key : id
        }
      }
      
     
    });
    //1tomany user to order
  Users.hasMany(Orders);
  Orders.belongsTo(Users);
    return Orders;
  };
