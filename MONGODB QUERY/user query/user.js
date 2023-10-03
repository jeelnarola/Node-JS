const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:String,
    gender:String,
    shirt_size:String,
    language:String
})

let userdata=mongoose.model('user',user)
module.exports={userdata}