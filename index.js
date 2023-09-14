const express = require('express');
const authRouter = require('./routes/auth');

require('./database');

const app = express();
const PORT= 2000;

app.use(express.json());

app.use('/auth', authRouter);


app.listen(PORT,() => console.log(`Welcome to port ${PORT}`));