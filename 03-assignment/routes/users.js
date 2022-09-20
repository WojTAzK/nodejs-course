const express = require('express');

const indexData = require('./index');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', usernames: indexData.users });
});

module.exports = router;
