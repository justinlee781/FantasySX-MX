const passport = require('passport');

function authenticateUser(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    req.logIn(user, err => {
      if (err) return next(err);
      res.json({ message: 'Logged in successfully' });
    });
  })(req, res, next);
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = { authenticateUser, ensureAuthenticated };
