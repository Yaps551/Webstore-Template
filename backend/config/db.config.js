const dotenv = require('dotenv').config();

module.exports = {
    HOST: process.env.PGHOST            || 'localhost',
    USER: process.env.PGUSER            || '5432',
    PASSWORD: process.env.PGPASSWORD    || 'placeholderPass',
    DB: process.env.PGDATABASE          || 'placeholderDB',
    dialect: 'postgres'
}