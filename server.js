const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const api = require('./routes/api');
const users = require('./routes/users');
const groups = require('./routes/groups');
const achieves = require('./routes/achieves');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);
app.use('/users', users);
app.use('/achieves', achieves);
app.use('/groups', groups);

app.get('/', function (req, res) {
});
app.listen(PORT, function () {
  console.log("run:" + PORT)
});
