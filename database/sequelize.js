const Sequelize = require('sequelize');
const db = require('./index.js');

const PR = db.define('pr', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lift_name: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  }
}, {timestamps: false});

// const User = db.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   username: {
//     type: Sequelize.STRING
//   }
// }, {timestamps: false});

// PR.belongsTo(User);
// User.hasMany(PR);

module.exports = {
  PR,
  // User
};