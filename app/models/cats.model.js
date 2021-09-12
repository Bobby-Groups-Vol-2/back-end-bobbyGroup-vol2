
module.exports = (sequelize, Sequelize) => {
    const Cats = sequelize.define("cats", {
         catid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull : false
        },
        catname: {
        type: Sequelize.STRING
        ,allowNull : false
      },
      catimage:{
          type: Sequelize.STRING,
          allowNull : false
      },
      price:{
          type: Sequelize.DOUBLE
          ,allowNull : false
      },
      gender:{
        type: Sequelize.STRING
        ,allowNull : false
      },
      status: {
        type : Sequelize.STRING
        ,allowNull : false
      },
      dob:{
          type:Sequelize.DATEONLY
          ,allowNull : false
      },
      certificateimage:{
          type: Sequelize.STRING
          
      },
      species_speciesid :{
          type:Sequelize.INTEGER,
        
      },
      orders_orderid : {
          type : Sequelize.INTEGER,
        
      }
      

    });
    Cats.associate = models =>{
        Cats.belongsTo(model.Orders, {
          foreignKey:{
           name   : 'orders_orderid',
          allowNull : false
          }
        }),
        Cats.belongsTo(model.Species,{
            foreignKey:{
                name   : 'species_speciesid',
               allowNull : false
               }
        })
       }
    return Cats;
  };

