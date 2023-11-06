const userModel = require("../Model/user.schema")
const cookie=require("cookie-parser")

const signup=async(req,res)=>{

    try {
        let {username,password,role,email}=req.body
    let data=await userModel.findOne({email:email})
    if(!data){
        let data=await userModel.create(req.body)
        console.log(data);
        res.cookie("role",data.role)
       res.cookie("id",data.id).send(`Account created successfully ${data.username}`)
    }else{
        res.cookie("role",data.role)
       res.cookie("id",data.id).send(`Account created successfully ${data.username}`)
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
const fetch = async(req,res)=>{
  let data = await userModel.find()
  res.send(data)
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
        res.cookie("role",data.role)
        console.log(data.role);
        res.cookie("id",data.id).cookie("author",data.username).send(`Welcome User ${data.username}`)
    }catch (error) {
        console.log(error);
    }
}

const home=async(req,res)=>{
    let data = await userModel.find()
    res.render('index')
}

module.exports={signup,signpShow,loginShow,login,home,fetch}