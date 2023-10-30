const login=(req,res,next)=>{
    let {name,email,password}=req.body
    if(name&&email&&password){
        next()
    }
    else{
        res.send("404 error")
    }
}

module.exports={login}