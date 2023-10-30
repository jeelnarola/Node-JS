const express=require('express')
const cookieparser=require("cookie-parser")
const data=require("./Config/db")

const router = require('./Routers/Cookie.router')
require("dotenv").config()
const app=express()
app.set("view engine","ejs")
app.set("views",__dirname+"/Views")
app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(cookieparser())

app.use(router)

app.get("/del",(req,res)=>{
    res.cookie("id",{
        maxAge:1000
    }).send("dele")
})
let port=process.env.port
app.listen(port,()=>{
    console.log(`server start :--> port:${port}`);
    data()
})