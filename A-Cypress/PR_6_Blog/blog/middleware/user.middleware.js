const userModel = require("../Model/user.schema")

const logincheck=async(req,res,next)=>{
    let {email,password}=req.body
    let data=await userModel.findOne({email:email,password:password})
    console.log(data);

    if(!data){
        res.send("Invalid Credentials.")
    }
    else{
        next()
    }
}
module.exports=logincheck