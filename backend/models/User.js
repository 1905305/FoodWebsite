const mongoose = require("mongoose");

const UserModels = mongoose.model("User", {
  name: { type: String, required: true },
  email: { type: String, reqired: true },
  password: { type: String, required: true },
});

module.exports = UserModels;
