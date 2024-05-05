const express=require('express');
const session=require('express-session')
const database = require('./config/database.config');
const router = require('./router/user.router');
const cookie=require('cookie-parser')


const app=express()
app.use(express.json())
app.use(session({secret:"key"}))
app.use(cookie())
app.use(router)

app.listen(8090,()=>{
    console.log("server 8090");
    database()
})