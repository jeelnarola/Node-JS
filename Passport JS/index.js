const express=require('express')
const router=require("./Routers/user.router")
const data = require('./Configs/db')
const passport = require('passport')
const session=require("express-session")
const local = require('./Helper/local')
const app=express()
app.use(express.json())
app.set("view engine","ejs")
app.set("views",__dirname+"/Views")
app.use(express.static(__dirname+"/Public"))
app.use(session({secret:"secret"}))
local(passport)

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({extended:true}))
app.use(router)
let port=8090

app.listen(port,()=>{
    console.log(`server start :-->${port}`);
    data()
})