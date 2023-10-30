const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:String,
    email:String
})

const userschema=mongoose.model("cookiess",user)

module.exports=userschema