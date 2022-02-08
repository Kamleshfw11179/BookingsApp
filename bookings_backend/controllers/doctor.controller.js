const express = require("express")
const router = express.Router()
const Doctor = require("../models/doctor.model")

router.get("",async(req,res)=>{
    let user = await Doctor.find({});
    res.send(user)
    return;
})
router.post("",async(req,res)=>{
    let user = await Doctor.create(req.body)
    res.send(user);
    return
})
router.get("/:speciality",async(req,res)=>{
    let data = await Doctor.find({speciality:{$eq:req.params.speciality}})
    res.send(data)
    return;
})
router.get("/email/:email",async(req,res)=>{
    let data = await Doctor.findOne({email:{$eq:req.params.email}})
    res.send(data)
    return;
})
router.get("/id/:id",async(req,res)=>{
    let user = await Doctor.findById(req.params.id);
    res.send(user)
    return;
})
router.patch("/:id",async(req,res)=>{
    let user = await Doctor.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    res.send(user)
    return;
})
router.delete("/:id",async(req,res)=>{
    let user = await Doctor.findByIdAndDelete(req.params.id);
    res.send(user)
    return;
})

module.exports = router;