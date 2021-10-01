module.exports = (sequelize, Datatypes) => {
    const Vaccines = sequelize.define("vaccines", {
      vacid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      vacname: {
        type: Datatypes.STRING(50)
        ,allowNull : false,
        unique: true
      },
      
     
    });
  Vaccines.associate = function(models){
    Vaccines.hasMany(models.takes,{
      foreignKey :{
       name :  'vaccines_vacid',
       
      }
     
    })
  }
    return Vaccines;
  };

