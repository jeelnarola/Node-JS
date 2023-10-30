const mongoose=require('mongoose')

const movieschema=new mongoose.Schema({
    title:String,
    description:String,
    releaseDate:String,
    category:String,
    actors: [{ name: String }],
    image:String,
    ratings: [
      {
        value: Number,
      },
    ],
    comments: [
      {
        text: String,
      },
    ],
    addedBy: String,
})

const moviemodel=mongoose.model("Movies",movieschema)
module.exports=moviemodel