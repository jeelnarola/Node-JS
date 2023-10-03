const mongoose=require('mongoose')

const database=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log("database connect");
}

module.exports=database