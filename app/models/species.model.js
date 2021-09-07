module.exports = (sequelize, Sequelize) => {
    const Species = sequelize.define("species", {
        speciesid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        speciesname: {
        type: Sequelize.STRING
      },
      
     
    });
  
    return Species;
  };

