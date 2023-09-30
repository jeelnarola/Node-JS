const mongoose=require('mongoose')

let data=new mongoose.Schema({
    name:String,
    grid:Number,
    course:String,
    email:String,
})
const model=mongoose.model('student-data',data)

module.exports={model}