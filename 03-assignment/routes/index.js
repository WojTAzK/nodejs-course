const express = require('express');

const users = [];

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add user' });
});

router.post('/', (req, res, next) => {
  console.log(users);
  users.push(req.body.username);

  res.redirect('/users');
});

module.exports.routes = router;
module.exports.users = users;
