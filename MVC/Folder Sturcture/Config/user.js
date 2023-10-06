
const mongoose=require('mongoose')


const data=async()=>{
    await mongoose.connect("mongodb+srv://jeel:narola@cluster0.dgwjmgh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    console.log("database connect");
}

module.exports=data