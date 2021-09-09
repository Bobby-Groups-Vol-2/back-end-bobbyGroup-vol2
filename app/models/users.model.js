module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        userid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        username: {
        type: Sequelize.STRING
        ,allowNull : false
      },
      password: {
        type: Sequelize.STRING
        ,allowNull : false
      },
      role:{
        type: Sequelize.STRING
        ,allowNull : false
      },
      address:{
        type: Sequelize.STRING
      },
      tel:{
        type: Sequelize.INTEGER
        ,allowNull : false
      }
       });
    Users.associate = models =>{
      Users.hasMany(models.orders,{
        onDelete: "cascade"
      })
    }

    return Users;
  };

