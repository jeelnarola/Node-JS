const mongoose=require("mongoose")

const blog=new mongoose.Schema({
    title: String,
  content: String,
  image: String,
  author: String,
  category:String,
  likedBy: [{ username: String }],
  comments: [{
      text: String,
      username: String,
      date: { type: Date, default: Date.now } }]
})

const blogmodel=mongoose.model("blogdata",blog)

module.exports=blogmodel