const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    logging: false
});

module.exports = sequelize;