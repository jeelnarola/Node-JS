const userModel = require("../Model/user.schema")

const blogcheck=(req,res,next)=>{
    let {title,content, image, category}=req.body

    if(title&&content&&image&&category){
        next()
    }else{
        res.send("All fields are required")
    }
}

const cookie=async(req,res,next)=>{
    let {id}=req.cookies;
    console.log(id);
    if(id){
        let data=await userModel.findById(id)
        if(data.role=="admin"){
        next()
        }
        else{
            res.send("You are not authorized to access this page.")
        }
    }
    else{
        res.render("login")
    }
}


module.exports={blogcheck,cookie}