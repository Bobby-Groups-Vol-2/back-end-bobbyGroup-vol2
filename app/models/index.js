const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
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
db.species = require("./species.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize,Sequelize);
db.patterns = require("./patterns.model.js")(sequelize,Sequelize);
module.exports = db;