const mongoose = require("mongoose")


const doctorSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    speciality:{type:String,required:true},
    visitingTimefrom:{type:Number,required:true},
    visitingTimetill:{type:Number,required:true},
    patients:{type:Array}
})


const Doctor = mongoose.model("doctor",doctorSchema)

module.exports = Doctor;