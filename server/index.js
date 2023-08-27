// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/random-names', (req, res) => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];
  res.json(names);
});

app.listen(5000, () => {
  console.log('API app listening on port 5000');
});
