const mongoose = require('mongoose');
const { hashPassword } = require('../../utils/bcrypt');

const UserSchema = new mongoose.Schema({
    username:{
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    password:{
        type: mongoose.SchemaTypes.String,
        required: true
    }
});


module.exports = mongoose.model("users", UserSchema);