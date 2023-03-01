const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

// Set up middleware
app.use(cookieParser());
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Set up a login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform your authentication logic here
  if (username === 'user' && password === 'password') {
    req.session.authenticated = true;
    res.send('You are now logged in!');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Set up a restricted endpoint
const requireAuth = (req, res, next) => {
  if (req.session && req.session.authenticated) {
    return next();
  } else {
    res.status(401).send('You must be logged in to view this page');
  }
};

app.get('/restricted', requireAuth, (req, res) => {
  res.send('This is a restricted page!');
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
