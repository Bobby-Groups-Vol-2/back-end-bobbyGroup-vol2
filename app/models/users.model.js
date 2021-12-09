

module.exports = (sequelize, Datatypes) => {
    const Users = sequelize.define("users", {
        userid: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        username: {
        type: Datatypes.STRING(30) 
        ,allowNull : false,
        unique: true
      },
      password: {
        type: Datatypes.STRING(300) 
        ,allowNull : false
      },
      role:{
        type: Datatypes.STRING(10) 
        ,allowNull : false
      },
      address:{
        type: Datatypes.STRING(100),
      },
      tel:{
        type: Datatypes.STRING(13) 
        ,allowNull : false
      },
      
      
       });

      
       Users.associate = function(models){
         Users.hasMany(models.orders,{
          foreignKey : {
            name : 'users_userid',
             type : Datatypes.INTEGER,
             allowNull : false
             }
         })
       }


    
    return Users;
  };

   
