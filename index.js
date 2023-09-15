const express = require('express');
const authRouter = require('./routes/auth');

require('./database');

const app = express();

// middleware

app.use(express.json());


// routes
app.use('/auth', authRouter);


const PORT= 2000;
app.listen(PORT,() => console.log(`Welcome to port ${PORT}`));