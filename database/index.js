const Sequelize = require('sequelize');
const config = require('./config.js');

const database = new Sequelize('prtracker', config.user, config.pass, {
  host: config.ip,
  dialect: 'postgres'
})

module.exports = database;