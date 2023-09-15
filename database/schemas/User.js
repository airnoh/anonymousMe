const mongoose = require("mongoose");
const { hashPassword } = require("../../utils/bcrypt");
const { comparePassword } = require("../../utils/bcrypt");
const { reset } = require("nodemon");

const UserSchema = new mongoose.Schema({
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

// fire a function before user is saved to the database
UserSchema.pre("save", async function (next) {
  hashPassword(this.password);
  next();
});

// static methods to login user
UserSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = comparePassword(password, user.password);
    if (auth) {
      return user;
    }
    res.status(401);
    // throw Error("Invalid password");
  }
  res.status(404);
//   throw Error("User not found");
};

module.exports = mongoose.model("users", UserSchema);