module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        userid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      tel:{
        type: Sequelize.INTEGER
      }
      
     
    });
  
    return Users;
  };

