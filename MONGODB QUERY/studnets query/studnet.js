const moongoose=require('mongoose')

const data=new moongoose.Schema({
    name:String,
    gender:String,
    class:String,
    section:String,
    maths:Number,
    science:Number,
    english:Number,
})

const model=moongoose.model("students",data)

module.exports={model}