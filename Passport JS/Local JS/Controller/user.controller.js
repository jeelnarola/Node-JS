const model = require("../Models/user.Schema")

const signup=async(req,res)=>{
    const data=await model.create(req.body)
    console.log(data);
    if(data){
        res.send("user already exists")
    }
    else{
        const user=await model.create(req.body)
        res.send(user)
    }
}

const home=(req,res)=>{
    res.render("index")
}
const login=(req,res)=>{
    res.render("login")
}
const userlogin=async(req,res)=>{
    // let data=await model.find({email:req.body.email,password:req.body.password})
    // if(data){
    //     res.send("login")
    // }
    // else{
    // res.send("user already exists")
    // }
    res.send("login")
}
module.exports={signup,home,login,userlogin}