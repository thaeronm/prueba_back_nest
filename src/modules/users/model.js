const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize.config');

const user = sequelize.define('user', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING 
}, {
  sequelize,
  timestamps: true,
});

module.exports = user;

