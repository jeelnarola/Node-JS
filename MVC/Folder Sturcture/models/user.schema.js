const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

const userschema=mongoose.model("user",user)

module.exports=userschema