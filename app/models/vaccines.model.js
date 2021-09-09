module.exports = (sequelize, Sequelize) => {
    const Vaccines = sequelize.define("vaccines", {
      vacid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      vacname: {
        type: Sequelize.STRING
        ,allowNull : false
      },
      
     
    });
  
    return Vaccines;
  };

