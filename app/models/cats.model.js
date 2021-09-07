const Species = require("./species.model.js")
const Orders = require("./orders.model.js")
module.exports = (sequelize, Sequelize) => {
    const Cats = sequelize.define("cats", {
         catid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        catname: {
        type: Sequelize.STRING
      },
      catimage:{
          type: Sequelize.STRING
      },
      price:{
          type: Sequelize.DOUBLE
      },
      gender:{
        type: Sequelize.STRING
      },
      status: {
        type : Sequelize.STRING
      },
      dob:{
          type:Sequelize.DATEONLY
      },
      certificateimage:{
          type: Sequelize.STRING
      },
      species_speciesid :{
          type:Sequelize.INTEGER,
          reference:{
              model : Species,
              key : id 
          }
      },
      orders_orderid : {
          type : Sequelize.INTEGER,
          reference: {
              model : Orders,
              key : id
          }
      }
      

    });
  
    return Cats;
  };

