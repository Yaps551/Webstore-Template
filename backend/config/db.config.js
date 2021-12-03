const dotenv = require('dotenv').config();

module.exports = {
    HOST: process.env.PG_HOST            || 'localhost',
    USER: process.env.PG_USER            || '5432',
    PASSWORD: process.env.PG_PASSWORD    || 'placeholderPass',
    DB: process.env.PG_DATABASE          || 'placeholderDB',
    dialect: 'postgres'
}