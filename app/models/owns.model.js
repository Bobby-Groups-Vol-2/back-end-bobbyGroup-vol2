
module.exports = (sequelize, Datatypes) => {
  const Owns = sequelize.define("owns", {
    species_speciesid: {
      primaryKey: true,

      type: Datatypes.INTEGER,

    },
    patterns_patternid: {
      primaryKey: true,
  
      type: Datatypes.INTEGER,
    }

  });

  Owns.associate = function (models) {
    Owns.belongsTo(models.species, {
      onDelete : 'cascade',
      foreignKey: {
        name: "species_speciesid",
     
      },
      references: {
        model: 'species',
        key: 'id'
      }

    }),
      Owns.belongsTo(models.patterns, { 
        onDelete : 'cascade',
        foreignKey: {
          name: "patterns_patternid",
       
        },
        references: {
          model: 'patterns',
          key: 'id'
        }
      }
      )
  }
  return Owns;
};
