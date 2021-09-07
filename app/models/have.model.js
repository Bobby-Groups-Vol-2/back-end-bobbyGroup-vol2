const Patterns = require("./patterns.model.js")
const Species = require("./species.model.js")
module.exports = (sequelize, Sequelize) => {
   const Have = sequelize.define("have", {
     
       patterns_patternid: {
       type: Sequelize.INTEGER,
       reference: {
           model: Patterns,
           key : id
       }
     },
     species_speciesid:{
       type: Sequelize.INTEGER,
       reference: {
           model: Species,
           key : id
       }
     }
     
    
   });
 
   Patterns.belongsToMany(Species, { through: Have });
   Species.belongsToMany(Patterns, { through: Have });
   return Have;
 };
