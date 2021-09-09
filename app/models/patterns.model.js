module.exports = (sequelize, Sequelize) => {
    const Patterns = sequelize.define("patterns", {
       patternid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        patternname: {
        type: Sequelize.STRING
        ,allowNull : false
      },
      
     
    });
  
    return Patterns;
  };

