const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    UserId:String,
    UserName:String,
    FirstName:String,
    LastName:String,
    Address:String,
    Country:String,
    IsActive:Boolean,
    CreateDate:Date
})

const User = mongoose.model("User", UserSchema); 
module.exports = User;