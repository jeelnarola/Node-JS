const express=require('express')
const multer=require('multer')
const app=express()
// upload=({dest:"/path"})  cheng folder in require


const upload=multer({
    dest:"images"
}).single("img")

app.post("/",upload,(req,res)=>{
    res.send("upload img")
})
app.listen(8090,()=>console.log("server start"))