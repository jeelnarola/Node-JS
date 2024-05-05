const mongoose=require('mongoose')
const database=async()=>{
    await mongoose.connect("mongodb+srv://jeel:narola@cluster0.dgwjmgh.mongodb.net/compny?retryWrites=true&w=majority&appName=Cluster0")
    console.log("database connect");
}

module.exports=database