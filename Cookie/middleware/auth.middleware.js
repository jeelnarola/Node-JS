const userschema = require("../Models/Cookie.schema")

const auth=async(req,res,next)=>{
    const {id}=req.cookies
    if(id){
        let data= await userschema.findById(id)
        console.log(data);
        if(data.name==="jeel"){
            next()
        }
        else{
            res.send("only user product show")
        }
    }
    else{
        res.send("Only if there is a login, the product page should be open in Thanse and in the name Jeel")
    }
}

module.exports=auth