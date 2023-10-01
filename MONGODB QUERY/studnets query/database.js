const database=require("mongoose")

const data=async()=>{
    await database.connect('mongodb://127.0.0.1:27017')
    console.log("database connect to index js");
}

module.exports={data}