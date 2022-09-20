const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexData = require('./routes/index');
const usersRoute = require('./routes/users');

app.use(usersRoute);
app.use(indexData.routes);

app.use('/', (req, res, next) => {
  res.status(404).send('<h1>Error 404</h1>');
});

app.listen(3000);
