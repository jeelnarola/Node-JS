const express=require('express')
const {data}=require("./database")
const {model}=require('./st')
const app=express()
app.use(express.json())

let port=8090


app.get('/get',(req,res)=>{
    res.send("get rought")
})

app.post('/post',async(req,res)=>{
    // let user = await model.create(req.body)
    let uer=await model.create(req.body)
    // console.log(user);
    res.status(200).send(uer)
})

app.listen(port,()=>{
    console.log(`server start :-> localhost:${port}`);
    data()
})