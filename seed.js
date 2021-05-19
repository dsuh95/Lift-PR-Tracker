const database = require('./database/index.js');
const {PR} = require('./database/sequelize.js');

var PRs = [];

const seed = async () => {
  await database.sync({force:true});
  await Promise.all(PRs.map(pr => {
    return PR.create(pr);
  }))
  console.log('Database seeded successfully');
  database.close();
}

seed()
  .catch(error => {
    console.error('Error seeding: ', error);
    database.close();
  })