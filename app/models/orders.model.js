
module.exports = (sequelize, Datatypes) => {
    const Orders = sequelize.define("orders", {
        orderid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
   });
   Orders.associate = function(models){
    Orders.belongsTo(models.users,{
      foreignKey : {
       name : 'users_userid',
       type : Datatypes.INTEGER,
       allowNull : false
      }
    }),
    Orders.hasMany(models.cats,{
      foreignKey : {
        name : 'orders_orderid',
        allowNull: false,
        type: Datatypes.INTEGER
      }
    })
  }
  return Orders;
  };
