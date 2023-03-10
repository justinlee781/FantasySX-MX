const passport = require('passport');
const User = require('../models/User');

const createUser = async (req, res, next) => {
  passport.authenticate('register', async (err, user, info) => {
    try {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }

      if (info) {
        return res.status(400).json({ message: info.message });
      }

      await req.logIn(user, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Server error' });
        }
        res.status(201).json({ message: 'User created successfully', user });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  })(req, res, next);
};

module.exports = createUser;
