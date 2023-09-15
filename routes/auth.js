const { Router } = require("express");
const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/bcrypt");
const authController = require("../controllers/authController");
const router = Router();

// router.post("/signup", async (req, res) => {
//   const { username, password } = req.body;
//   const userDB = await User.findOne({ username });
//   if (userDB) {
//     res.status(400).send({ message: " User already registered" });
//   } else {
//     const password = hashPassword(req.body.password);
//     console.log(password);
//     const newUser = await User.create({ username, password });
//     res.sendStatus(201);
//   }
// });
router.post("/signup", authController.signup)
router.get('/signin', authController.signin)

module.exports = router;
