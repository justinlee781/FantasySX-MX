const express = require("express");
const {
  getUsers,
  createUser,
} = require("../controllers/userController");

const userRouter = express.Router();

// Handle GET and POST requests to /user
userRouter.route("/")
  .get(getUsers)
  .post(createUser);

module.exports = userRouter;
