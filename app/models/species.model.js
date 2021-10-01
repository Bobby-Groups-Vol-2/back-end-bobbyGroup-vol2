

module.exports = (sequelize, Datatypes) => {
    const Species = sequelize.define("species", {
        speciesid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        speciesname: {
        type: Datatypes.STRING(50)
        ,allowNull : false,
        unique: true
      },
      
     
    });

    Species.associate = function(models){
      Species.hasMany(models.owns,{
      
        foreignKey : {
          name :  'species_speciesid',
          type : Datatypes.INTEGER,
          
         
        },
    
      
      })
    }
  
    return Species;

  };

