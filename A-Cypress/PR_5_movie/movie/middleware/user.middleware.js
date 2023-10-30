const loginM=async(req,res,next)=>{
    
    let {username,password}=req.body
    if(!username || !password){
        res.status(400).json({error:"Invalid username or password"})
    }
    else{
        next()
    }
}

const moviem=(req,res,next)=>{
    let {title,description,releaseDate,category,actors,image,ratings,comments,addedBy}=req.body
}
module.exports=loginM