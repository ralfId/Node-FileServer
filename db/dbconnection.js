const { Sequelize } = require('sequelize');

const db = new Sequelize('Employees_DB', 'root', 'stefa2022',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;