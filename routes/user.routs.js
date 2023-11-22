const {Router}=require("express");
const user = require("../models/user.schema");
const jwt=require("jsonwebtoken");
const { auth } = require("../middlewears/auth");
const route=Router()

route.post("/signup",async(req,res)=>{
    let data=await user.create(req.body)
    res.send(data)
})
route.post("/login",async(req,res)=>{
    let {email,password}=req.body
    let data=await user.findOne({email:email,password:password})
    if(data){
        let token = jwt.sign({ username: data.username }, 'the');
        res.send("done").cookie("token",token)
    }
    else{
        res.send("first signup")
    }
})
route.get("/sub",auth,async(req,res)=>{
    let data=await user.find()
    res.send(data)
})

module.exports=route