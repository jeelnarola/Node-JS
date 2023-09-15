const http =require('http');
const fs=require('fs')


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
       fs.readFile("index.html",(err,data)=>{
        if(err){
            console.log(`error : ${err}`);
        }else{
            res.end(data);
        }
       })
    }else if(req.url=="/login"){
        fs.readFile("login.html",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=="/sign"){
        fs.readFile("sign.html","utf-8",(err,data)=>{
            if (err) {
            console.log(err);                
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url=="/cart"){
        fs.readFile("cart.html",(err,data)=>{
            try{
                res.end(data)
            }catch(err){
                console.log(err);
            }
        })
    }
    else if(req.url=="/product"){
        fs.readFile("product.html",(err,data)=>{
            try{
                res.end(data)
            }catch(err){
                console.log(err);
            }
        })
    }
   else if(!(req.url=="/cart"||req.url=="/sign"||req.url=="/login"||req.url=="/"||req.url=="/product")){
    res.end("404 error")
   }
})

server.listen(8090,()=>{console.log("err")})