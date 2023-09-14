const { Router} = require('express');
const User = require('../database/schemas/User');
const authController = require('../controllers/authController')
const router = Router();


router.route('/signup').post(authController.signup);

module.exports = router;