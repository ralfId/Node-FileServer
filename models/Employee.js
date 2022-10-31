const{ DataTypes}= require('sequelize');
const db = require('../db/dbconnection');

const Employee = db.define('Employee',{
    ID_Employee:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    First_Name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Last_Name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true,
        },
    },
    Country:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    City:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Profession:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Company:{
        type: DataTypes.STRING,
        allowNull: false,
    }

});

module.exports = Employee;