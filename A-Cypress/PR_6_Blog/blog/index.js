const blogRouter = require("./Router/blog.router")
const router = require("./Router/user.router")
const database = require("./config/db")
const cookie=require("cookie-parser")
const express=require("express")

const app=express()


app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")
app.set("Views",__dirname+"/Views")
app.use(express.static(__dirname+"/Public"))
app.use(cookie())
app.use(router)
app.use(blogRouter)
app.listen(8090,()=>{
    console.log("server start");
    database()
})