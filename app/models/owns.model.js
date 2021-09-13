
module.exports = (sequelize, Datatypes) => {
  const Owns = sequelize.define("owns", {
    species_speciesid: {
      primaryKey: true,
      allowNull: false,
      type: Datatypes.INTEGER,

    },
    patterns_patternid: {
      primaryKey: true,
      allowNull: false,
      type: Datatypes.INTEGER,
    }

  });

  Owns.associate = function (models) {
    Owns.belongsTo(models.species, {
      foreignKey: {
        name: "species_speciesid",
        allowNull: false
      },
      references: {
        model: 'species',
        key: 'id'
      }

    }),
      Owns.belongsTo(models.patterns, {
        foreignKey: {
          name: "patterns_patternid",
          allowNull: false
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
