const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno desde .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

module.exports = sequelize;