

module.exports = (sequelize, Datatypes) => {
    const Species = sequelize.define("species", {
        speciesid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        speciesname: {
        type: Datatypes.STRING(50)
        ,allowNull : false
      },
      
     
    });

    Species.associate = function(models){
      Species.hasMany(models.owns,{
        foreignKey : {
          name :  'species_speciesid',
          allowNull : false,
          targetKey : 'id'
        }
      })
    }
  
    return Species;

  };

