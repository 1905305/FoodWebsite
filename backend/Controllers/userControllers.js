//
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// Import the UserModel
const UserModels = require("../models/User");

// Your code here...

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModels.findOne({ email: email });

  if (!user) {
    return res.status(400).send("use does not exisits");
  }

  const isPasswordMatchingFromDb = await bcrypt.compare(
    password,
    user.password
  );

  if (isPasswordMatchingFromDb) {
    const token = jwt.sign({ userId: user._id }, "randomsecret");
    return res.status(200).json({
      user: user,
      token: token,
    });
  }

  return res.status(401).send("Incorrct login credentials");
};

/*
const signupUser = (req, res) => {
  res.send("Signup Successful");
};
*/

const signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  const emailExists = await UserModels.findOne({ email: email });
  if (emailExists) {
    return res.status(400).json("Email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new UserModels({
    name: name,
    email: email,
    password: hashPassword,
  });

  const savedUser = newUser.save();
  // create payload then Generate an acess token

  const token = jwt.sign({ userID: savedUser.id }, "randomsecret");
  return res.status(200).json({
    user: newUser,
    token: token,
  });
};

module.exports = {
  loginUser,
  signupUser,
};
