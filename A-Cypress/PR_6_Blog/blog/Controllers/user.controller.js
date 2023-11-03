const userModel = require("../Model/user.schema")
const cookie=require("cookie-parser")

const signup=async(req,res)=>{

    try {
        let {email}=req.body
    let data=await userModel.findOne({email:email})
    if(!data){
        let data=await userModel.create(req.body)
        console.log(data);
        res.cookie("role",data.role)
       res.cookie("id",data.id).render("login")
    }else{
        res.send("alyreadey extis")
    }
    } catch (error) {
        console.log(error);
    }
}

const signpShow=(req,res)=>{
    res.render("Signup")
}

const loginShow=(req,res)=>{
    res.render('login')
}

const login=async(req,res)=>{
    try{
        let data=await userModel.findOne({email:req.body.email})
            if(!data){
            res.send("email extis")
        }
        else if(data.password!==req.body.password){
            res.send("password not match")
        }
            res.render("index")
    }catch (error) {
        console.log(error);
    }
}

const home=(req,res)=>{
    res.render('index')
}

module.exports={signup,signpShow,loginShow,login,home}