const userschema=require("../models/user.schema")

const home=async(req,res)=>{
    let post =await userschema.create(req.body)
    res.send("Login successfull")
}
const home2=async(req,res)=>{
    let get=await userschema.find()
    res.send(get)
}

module.exports={home,home2}