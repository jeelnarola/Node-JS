const usermodel = require("../Models/user.schema")

const Home=async(req,res)=>{
    res.send("Welcome to the movie API")
}

const signup=async(req,res)=>{

    let data=await usermodel.findOne({email:req.body.email})
    if(data){
        res.status(201).send(data)
    }
    else{
        let newuser=await usermodel.create(req.body)
        res.status(201).send(newuser)
    }
}

const login=async(req,res)=>{
    let data=await usermodel.findOne({username:req.body.username,password:req.body.password})

    if(data){
        res.send({message:'Logged in successfully'})
    }else{
        res.status(401).json({error:"Invalid username or password"})
    }
}

const userde=async(req,res)=>{
    let {id}=req.params
    let data=await usermodel.findByIdAndDelete(id)
    res.send({'message':'User deleted successfully'})
}

const userget=async(req,res)=>{

    let data=await usermodel.find()
    res.send(data)
}

module.exports={Home,signup,login,userde,userget}