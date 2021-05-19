const Sequelize = require('sequelize');

const database = new Sequelize('prtracker', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = database;