exports.getLogin = (req, res, next) => {
  console.log(req.get('Cookie')); // getting cookie
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Log In',
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.cookie('loggedIn', true, { httpOnly: true }); // setting cookie
  res.redirect('/');
};
