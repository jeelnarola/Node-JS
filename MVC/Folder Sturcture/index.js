const express=require('express')
const data=require('./Config/user')
const router = require('./Routes/user.routes')
require('dotenv').config()

console.log(process.env.DR_URL);

const app=express()

app.set('view engine', 'ejs');
app.set("viwes",__dirname+"/Viwes")
app.use(express.static(__dirname + '/Public'))
app.use(express.json())
app.use(router)
let port=8090


app.listen(port,()=>{
    console.log(`server start :--> 8090 `)
    data()
})


