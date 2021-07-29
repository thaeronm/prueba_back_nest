const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: (str) => console.log(str),
    sync: true,
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = sequelize;