const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    appointments:{type:Array}
})


const User = mongoose.model("user",userSchema)

module.exports = User;