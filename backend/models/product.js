const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    imageUrl: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 9.99
    }
});

module.exports = Product;
