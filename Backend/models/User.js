const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email address"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);