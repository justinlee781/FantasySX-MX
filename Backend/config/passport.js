const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Define the strategy to be used by Passport
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Code to find the user in your database and validate their credentials
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
));

// Serialize the user object
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize the user object based on a pre-existing ID
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
