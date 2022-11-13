const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // console.log(req.get('Cookie')); // getting cookie

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Log In',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  // res.cookie('loggedIn', true, { httpOnly: true }); // setting cookie
  // req.session.isLoggedIn = true;

  User.findById('634c222ae71fced77ea3451e')
    .then((user) => {
      console.log(user);
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
