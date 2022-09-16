const http = require('http');

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('Another middleware!!');
  res.send('<h1>Hello there from Express</h1>');
});

http.createServer(app).listen(3000);
