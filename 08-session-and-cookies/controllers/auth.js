exports.getLogin = (req, res, next) => {
  // console.log(req.get('Cookie')); // getting cookie
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Log In',
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.cookie('loggedIn', true, { httpOnly: true }); // setting cookie
  req.session.isLoggedIn = true;
  res.redirect('/');
};
