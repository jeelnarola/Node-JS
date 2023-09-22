const express=require("express")
const post = require("./js")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/post',post,(req,res)=>{
    res.sendFile(__dirname+"/show.html")
})

app.listen(8080,()=>console.log("server"))