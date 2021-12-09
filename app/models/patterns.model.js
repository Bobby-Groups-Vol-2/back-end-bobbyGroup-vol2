

module.exports = (sequelize, Datatypes) => {
    const Patterns = sequelize.define("patterns", {
       patternid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        patternname: {
        type: Datatypes.STRING(50)
        ,allowNull : false,
        unique: true
      },
      
     
    });
    Patterns.associate = function(models){
      Patterns.hasMany(models.owns,{ 
    
        foreignKey : {
          name :  'patterns_patternid',
          type : Datatypes.INTEGER,
         
        } 
      
      })
    }
     
    return Patterns;
  };

