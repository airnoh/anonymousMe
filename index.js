const express = require('express');
const authRouter = require('./routes/auth');
const authController = require('./controllers/authController');
const bcrypt = require('./utils/bcrypt')
const mongoose = require('mongoose');


require('./database');


const app = express();
const PORT= 5000;
app.use('/api', (req, res, next) => {
    res.send('Welcome to the Anonymous');
})
app.use(express.json());
app.use('/auth', authRouter);


app.listen(PORT,() => console.log(`Welcome to port ${PORT}`));