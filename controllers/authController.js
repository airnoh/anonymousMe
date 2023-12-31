const { hashPassword} = require('../utils/bcrypt');
const User = require('../database/schemas/User');


exports.signup =  async(req, res) => {
const { username, password } = req.body;
const userDB = await User.findOne({ username });
if (userDB) {
  res.status(400).send({ message: " User already registered" });
} else {
  const password = hashPassword(req.body.password);
  console.log(password);
  const newUser = await User.create({ username, password });
  res.sendStatus(201);
}
}

exports.signin = async(req, res) => {
    const { username, password } = req.body;
   try {
    const user = await User.login(username, password);res.status(200).send({user: user.username});
   } catch (error) {
     res.status(400)
   }
};