module.exports = (sequelize, Sequelize) => {
    const Species = sequelize.define("species", {
        speciesid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        speciesname: {
        type: Sequelize.STRING
        ,allowNull : false
      },
      
     
    });
  Species.associate = model =>{
    Species.hasMany(model.species,{
    onDelete: "cascade"
    })
  }

    return Species;

  };

