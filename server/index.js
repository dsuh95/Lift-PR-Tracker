const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const db = require('./queries.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/pr*', async (req, res) => {
  var liftName = req.query.liftName;
  var results = await db.getPRs(liftName);
  res.status(200).json(results);
})

app.post('/pr', (req, res) => {
  var data = req.body;
  console.log(data);
  db.postPR(data);
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
