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

UserSchema.pre('save', (req,res,next)=>{
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    try{
        hashPassword(user.password);
        next();
    }catch(err){
        return next(err);
    }
})

module.exports = mongoose.model("users", UserSchema);