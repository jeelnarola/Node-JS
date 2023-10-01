const mongoose=require('mongoose')


const data=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log("Database connect in index");
}

module.exports={data}