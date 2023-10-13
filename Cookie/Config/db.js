const mongoose=require('mongoose')
require("dotenv").config()
const data=async()=>{
    await mongoose.connect(process.env.datalink)
    console.log("database connect");
}
module.exports=data