const express = require("express");
const User = require("../models/user.model");
const router = express.Router()

router.get("",async(req,res)=>{
    let user = await User.find({});
    res.send(user)
    return;
})
router.get("/:id",async(req,res)=>{
    let user = await User.findById(req.params.id);
    if(user){
    res.send(user)
    return;
    }else{
        res.status(404).send("No User Found.")
    }
})
router.post("",async(req,res)=>{
    let user = await User.create(req.body)
    res.status(201).send(user)
    return;
})
router.post("/login",async(req,res)=>{
    let user = await User.findOne({email:{$eq:req.body.name}})
    if(user){
    if(user.password==req.body.password){
        res.send({status:201,user:user})
        return;
    }else{
        res.send({status:404,message:"Please check the credentials."})
        return;
    }
}else{
    res.send({status:404,message:"Invalid Data."})
    return;
}
})

router.patch("/:id",async(req,res)=>{
    let user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    res.send(user)
    return;
})
router.delete("/:id",async(req,res)=>{
    let user = await User.findByIdAndDelete(req.params.id);
    res.send(user)
    return;
})

module.exports = router;