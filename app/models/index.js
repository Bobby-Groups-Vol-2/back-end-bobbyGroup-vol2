const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  operatorsAliases: false,

  define: {
    timestamps: false,
    freezeTableName: true
},
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vaccines = require("./vaccines.model.js")(sequelize, Sequelize);
db.owns = require("./owns.model.js")(sequelize,Sequelize)
db.species = require("./species.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize,Sequelize);
db.patterns = require("./patterns.model.js")(sequelize,Sequelize);
db.orders = require("./orders.model.js")(sequelize,Sequelize);
db.cats = require("./cats.model.js")(sequelize,Sequelize);
db.takes = require("./takes.model.js")(sequelize,Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})
module.exports = db;