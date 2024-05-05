const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>{
    let {jwt,_id}=req.cookies
    if(jwt==' ' || _id==' '){
       return res.send({msg:"Login || Signup"})
    }

    if(jwt||_id){
        next()
    }
}

module.exports=auth