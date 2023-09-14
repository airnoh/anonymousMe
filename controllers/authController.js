const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/bcrypt");

const signup = async (req, res, next) => {
  const { username, password } = req.body;
  const userDB = await User.findOne({ username });
  if (userDB) {
    res.status(400).send({ msg: "User already exists" });
  } else {
    const password = hashPassword(req.body.password);
    const newUser = await User.create({ username, password });
    res.status(201).send({ msg: "User created"});
  }
};

module.exports = {
  signup,
};
