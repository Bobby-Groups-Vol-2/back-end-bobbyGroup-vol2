module.exports = (sequelize, Datatypes) => {
    const Vaccines = sequelize.define("vaccines", {
      vacid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      vacname: {
        type: Datatypes.STRING
        ,allowNull : false
      },
      
     
    });
  
    return Vaccines;
  };

