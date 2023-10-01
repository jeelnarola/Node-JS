const express=require("express")
const {data}=require("./database")
const {model}=require("./studnet")
const app=express()
 
let port=8090

app.get("/",async(req,res)=>{
    let get=await model.find({gender:"Male"})
    res.send(get)
})
app.get("/female",async(req,res)=>{
    let female=await model.find({gender:"Female"}).count()
    res.json({female})
})
app.get("/male",async(req,res)=>{
    let marks=await model.find({
        gender:"Male",
        maths:{$gt:85},
        science:{$gt:85},
        english:{$gt:85}
    }).count()
    res.json({marks})
})

app.get("between",async(req,res)=>{
    let between=await model.find({
        maths:{$gt:50,$lt:75},
        science:{$gt:50,$lt:75}
    }).count()
    res.json({between})
})
app.get("/i",async(req,res)=>{
    let i=await model.find({
        class:{$gte:"I",$lte:"IV"},
        maths:{$gt:50},
        english:{$gt:50},
        science:{$gt:50}
    }).count()
    res.status(200).json(i)
})

app.get("/all",async(req,res)=>{
    let all=await model.find({
        gender: "Female",
        class: "X",
        section: "A",
        maths: { $lt: 25 },
        science: { $lt: 25 },
        english: { $lt: 25 },
    })
    res.status(200).send(all)
})

app.get("/mathstop",async(req,res)=>{
    let mathstop=await model.find({class:"V"}).sort({"maths":-1}).limit(3)
    res.send(mathstop)
})

app.get("/sciencebottom",async(req,res)=>{
    let sciencebottom=await model.find({class:"I"}).sort({science:1}).limit(5)
    res.send(sciencebottom)
})
app.get("/sectionA",async(req,res)=>{
    let sectionA=await model.find({
        section:"A",
        maths:{$lt:50},
        english:{$lt:50},
        science:{$lt:50}
    })
    res.send(sectionA)
})

app.get("/sectionC",async(req,res)=>{
    let sectionC=await model.find({
        section:"C",
        maths:{$gt:50},
        english:{$gt:50},
        science:{$gt:50}
    })
    res.status(200).send(sectionC)
})
app.get("/fall",async(req,res)=>{
    let fall=await model.find().sort({maths:1}).skip(20).limit(10)
    res.send(fall)

})
app.get("/fallscience",async(req,res)=>{
    let fallscience=await model.find().sort({science:1}).skip(80).limit(20)
    res.send(fallscience)

})
app.get("/twosub",async(req,res)=>{
    let twosub=await model.find({gender:"Female"}).sort({science:1,maths:1}).skip(15).limit(5)
    res.send(twosub)

})
app.get("/twosubmale",async(req,res)=>{
    let twosubmale=await model.find({gender:"Male"}).sort({science:1,maths:1}).skip(30).limit(15)
    res.send(twosubmale)

})

app.post('/',async(req,res)=>{
    let uer=await model.create(req.body)
    res.status(200).send(uer)
})

app.listen(port,()=>{
    console.log(`server start :-> localhosht:${port}`)
    data()
})