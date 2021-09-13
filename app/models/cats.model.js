
module.exports = (sequelize, Datatypes) => {
    const Cats = sequelize.define("cats", {
         catid: {
        type: Datatypes.INTEGER(10) ,
        autoIncrement: true,
        primaryKey: true,
        allowNull : false
        },
        catname: {
        type: Datatypes.STRING(50) 
        ,allowNull : false
      },
      catimage:{
          type: Datatypes.STRING(30) ,
          allowNull : false
      },
      price:{
          type: Datatypes.DOUBLE
          ,allowNull : false
      },
      gender:{
        type: Datatypes.STRING(10) 
        ,allowNull : false
      },
      status: {
        type : Datatypes.STRING(10) 
        ,allowNull : false
      },
      dob:{
          type:Datatypes.DATEONLY
          ,allowNull : false
      },
      certificateimage:{
          type: Datatypes.STRING(30),
          
      },
   
      

    });
    Cats.associate = function(models){
      Cats.belongsTo(models.species,{
        foreignKey : {
         name : 'species_speciesid',
        type : Datatypes.INTEGER,
         allowNull : false
        }
      })
    }
    return Cats;
  };

