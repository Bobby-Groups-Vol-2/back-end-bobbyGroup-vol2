

module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
        orderid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
 
        
    },
      users_userid:{
        type : Sequelize.INTEGER,
      
      }
      
      
     
    });
 
  Orders.associate = models =>{
  Orders.belongsTo(model.Users, {
    foreignKey:{
     name   : 'users_userid',
    allowNull : false
    }
  }),
    Orders.hasMany(model.cats,{
      onDelete: "cascade"
    })
  }
 
    return Orders;
  };
