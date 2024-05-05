const user = require("../models/User.model")
const jwt=require("jsonwebtoken")
const { body, validationResult } = require('express-validator');
const postmodel = require("../models/post.models");
// const { search } = require("../router/user.router");


// User Signup Logic
const Signup=async(req,res)=>{
    try {
        let data=await user.findOne({email:req.body.email})

        if(data){
            res.send({msg:"alrdy extis"})
        }else{

            let data=await user.create(req.body)
            let token=await jwt.sign({_id:data.id},"jwt",(err,info)=>{
                if(err){
                    console.log(err);
                }
                if(info){
                    req.session.jwt=token
                }
            })
            console.log(token);
            
            res.cookie("jwt",token).cookie("_id",data._id).send({msg:"Create User"})
        }
    } catch (error) {
        console.log(error);
    }
}

// User Login Logic
const login=async(req,res)=>{
    let data=await user.findOne({email:req.body.email})

    if(!data){
        res.send({msg:"Not Extis User.."})
    }
    if(data){
        if(data.password!==req.body.password){
            res.send({msg:"Password Worng.."})
        }else{
            let token=jwt.sign({_id:data.id},"jwt")
        
            res.cookie("jwt",token).cookie("_id",data._id).send({msg:"User Login..."})
        }
    }
}

// User Posts  Logic
const post=async(req,res)=>{
    const result=validationResult(req)
    if(result.isEmpty()){
        console.log(req.body);
        let data=await postmodel.create(req.body)
        return res.send({msg:"User Post Add..."},{data:data})
    }
    res.send({error:result.array()})
}

// User Posts All Logic
const postAll=async(req,res)=>{
    try {
        let data=await postmodel.find()
    let activ=0
    let deactiv=0
    for(let i=0;i<data.length;i++){
        if(data[i].active==true){
            activ++;
        }
        else{
            deactiv++;
        }
    }
    res.send({active:activ,deactiv:deactiv,data:data})
    } catch (error) {
        console.log(error);
    }
}

// User Posts Delete Logic
const postdelete=async(req,res)=>{
    try {
        let {id}=req.params
        let data=await postmodel.findByIdAndDelete(id)
        res.send({msg:"delete successfully",data:data})
    } catch (error) {
        console.log(error);
    }
}

// User Posts upadate Logic
const postpatch=async(req,res)=>{
   try {
    let {id}=req.params
    let update=await postmodel.findByIdAndUpdate(id,req.body)
    let data =await postmodel.findById(id)
    res.send({msg:"Update Successfully",data:data})
   } catch (error) {
    console.log(error);
   }
}

const searchLocation=async(req,res)=>{
    try {
        let {latitude,longitude}=req.body
        latitude = parseFloat(latitude);
        longitude = parseFloat(longitude);
        let data = await postmodel.aggregate([
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [latitude,longitude]
                    },
                    distanceField: "dist.calculated",
                    spherical:true
                }
            }
        ]);
        
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occurred");
    }
}

// all Controller Module
module.exports={Signup,login,post,postAll,postdelete,postpatch,searchLocation}