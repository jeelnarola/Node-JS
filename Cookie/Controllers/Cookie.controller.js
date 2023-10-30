const userschema=require('../Models/Cookie.schema')
const cookieparser=require("cookie-parser")
const home=async(req,res)=>{
    const {email}=req.body
    let data=await userschema.findOne({email:email})
   try{
    if(!data){
        res.send("not user")
    }
    if(data.name!=req.body.name){
        res.send("not password")
    }
   }
   catch(err){
    res.send(err)
   }
    res.cookie("id",data.id).send("login")
}
const get=(req,res)=>{
    res.send("Home")
}
const signup=async(req,res)=>{
    // let data=await userschema.create(req.body)
    let post =await userschema.create(req.body)
    res.send("signup")
}

const ui=(req,res)=>{
    res.render("index")
}

const product=(req,res)=>{
    res.send("Product Page")
}

// const del=(req,res)=>{
//     res.Cookie("id",).send("dele")
// }
module.exports={home,signup,get,ui,product}