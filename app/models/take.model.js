const Vaccines = require("./vaccines.model.js")
const Cats = require("./cats.model.js")
module.exports = (sequelize, Sequelize) => {
   const Take = sequelize.define("take", {
     
       cats_catid: {
       type: Sequelize.INTEGER,
       reference: {
           model: Cats,
           key : id
       }
     },
     vaccines_vacid:{
       type: Sequelize.INTEGER,
       reference: {
           model: Vaccines,
           key : id
       }
     }
     
    });
    Vaccines.belongsToMany(Cats, { through: Take });
    Cats.belongsToMany(Vaccines, { through: Take });
   return Take;
 };
