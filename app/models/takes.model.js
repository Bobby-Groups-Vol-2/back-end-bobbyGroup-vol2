
module.exports = (sequelize, Datatypes) => {
   const Takes = sequelize.define("takes", {
     
       cats_catid: {
       type: Datatypes.INTEGER,
       primaryKey: true
     },
     vaccines_vacid:{
       type: Datatypes.INTEGER,
       primaryKey: true
     }
     
    });
    Takes.associate = function(models){
      Takes.belongsTo(models.cats,{
        onDelete : 'cascade',
        foreignKey :{
          name : "cats_catid"
        },
        refernces : {
         model : 'cats',
         key :'id'
        }
      })
      Takes.belongsTo(models.vaccines,{
        onDelete : 'cascade',
        foreignKey :{
          name : "vaccines_vacid"
        },
        refernces : {
         model : 'vaccines',
         key : 'id'
        }
      })
    }
   return Takes;
 };
