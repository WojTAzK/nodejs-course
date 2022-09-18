const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const usersRoute = require('./routes/users');
const indexRoute = require('./routes/index');

app.use(usersRoute);
app.use(indexRoute);

app.use('/', (req, res, next) => {
  res.status(404).send('<h1>Error 404</h1>');
});

app.listen(3000);
