const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async (req, res, next) => {
  res
  .status(201)
  .setHeader("Content-Type", "application/json")
  .json({ message: "registering user...."})
};

const getUsers = async (req, res, next ) => {
  res
  .status(200)
  .setHeader("Content-Type", "application/json")
  .json({ message:"Success, retrieving all users" })
}
  //check to see if user already exists
  // User.findOne({username: req.body.username}, function(err, user) {
  //   if (err) {
  //     //return err
  //     return res.send({"message": `error:${err.message}`})
  //   } else if (user) {
  //     res.statusCode = 403
  //     return res.send({ "message": "User already exists!" }) 
  //   } else {
  // User.register(
  //   new User({
      // username: req.body.username,
      // firstName: req.body.firstName,
      // lastName: req.body.lastName,
      // gender: req.body.gender,
      // email: req.body.email,
  //   }),
  //   req.body.password,
  //   function (err, user) {
  //     if (err) {
  //       console.log("error while registering user!", err);
  //       return next(err);
  //     } else {
  //       user.save()
  //       console.log("user registered");
  //       console.log(user);
  //       // passport.authenticate("local")(req, res, () => {
  //       //   res.statusCode = 200;
  //       //   res.setHeader("Content-Type", "application/json");
  //       //   res.json({ success: true, status: "Registration Successful!" });
  //       // });
  //     }
  //   }
  // );
// }})

// @route POST api/signup
// @desc Register user
// @access Public
// router.post(
//   '/signup',
//   [
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     // Validate input data
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       // Check if user already exists
//       let user = await User.findOne({ email });
//       if (user) {
//         return res.status(400).json({ message: 'User already exists' });
//       }

//       // Create a new user instance
//       user = new User({ email, password });

//       // Hash password with bcryptjs
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);

//       // Save user to database
//       await user.save();

//       // Send response with success message
//       res.json({ message: 'User created successfully' });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   }
// );

module.exports = { createUser, getUsers };
