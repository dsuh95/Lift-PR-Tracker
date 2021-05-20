const {Client} = require('pg');

const connection = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'prtracker',
  port: 5432
})

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to the database: ', err);
    return;
  }
  console.log('Database connection established');
})


const getPRs = async () => {
  var getQuery = `SELECT * FROM prs`;
  var prs = await connection.query(getQuery);
  return prs.rows;
}

const postPR = (data) => {
  var postQuery = `INSERT INTO prs (id, lift_name, weight, date) VALUES (DEFAULT, '${data.liftName}', ${data.weight}, '${data.date}'::DATE)`
  connection.query(postQuery)
    .catch(err => {
      console.log(err);
    })
    .then(() => {
      console.log('Post successful');
    })
}

module.exports = {
  getPRs,
  postPR
}