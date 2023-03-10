const express = require("express");
const passport = require("passport");
const {
  getUsers,
  createUser,
} = require("../controllers/userController");

const userRouter = express.Router();

// Handle GET and POST requests to /user
userRouter.route("/")
  .get(getUsers)
  .post(
    passport.authenticate("register", { session: false }),
    createUser
  );

module.exports = userRouter;
