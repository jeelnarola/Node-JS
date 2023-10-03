const express=require('express')
const database=require('./database')
const {userdata}=require('./user')
const app=express()
app.use(express.json())
let port=8090


app.get("/female",async(req,res)=>{
    let female=await userdata.find({gender:"Female"})
    res.send(female)
})
app.get("/language",async(req,res)=>{
    let lan=await userdata.find({gender:"Female" , language:{$in: ["Kannada", "Hindi"]}})
    res.send(lan)
})
app.get("/languagefind",async(req,res)=>{
    let language=await userdata.find({$or:[{gender:"Female",language:"Kannada"},{gender:"Male",language:"Hindi"}]})
    res.status(200).send(language)
})

app.get("/shirt_size",async(req,res)=>{
    let shirt_size= await userdata.find({shirt_size:"S"})
    res.send(shirt_size)
})

app.get("/femalexl",async(req,res)=>{
    let femalexl= await userdata.find({gender:"Female",shirt_size:"XL"})
    res.status(200).send(femalexl)
})
app.get("/malehindi",async(req,res)=>{
    let melahindi= await userdata.find({$or:[{gender:"Male",language:"English"},{gender:"Female",language:"Hindi"}]})
    res.status(200).send(melahindi)
})

app.get("/femalekannada",async(req,res)=>{
    let femalekannada=await userdata.find({$or:[{gender:"Male",language:{$in:["Hindi,English"]}},{gender:"Female",language:{$in:[" Kannada ","German"]}}]})
    res.status(200).send(femalekannada)
})

app.post("/",async(req,res)=>{
    let post=await userdata.create(req.body)
res.send(post)
})


app.listen(port,()=>{
    console.log(`server start :--> ${port}`);
    database()
})
