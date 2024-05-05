const blogmodel = require("../Model/blog.schema")
const multer=require("multer")
const blogget=(req,res)=>{
    res.render("blog")
}

const blog=async(req,res)=>{
    let {author}=req.cookies
    let obj={
        title :req.body.title,
        content :req.body.content,
        category :req.body.category,
        image :req.body.image,
        author:author
    }
    let data=await blogmodel.create(obj)
    res.cookie("blogId",data.id).send(`blog created by ${author}`)
}

const blogUi=async(req,res)=>{
    let data=await blogmodel.find()
    res.send(data)
}

const allBlogUI=(req,res)=>{
    res.render("Blogs")
}

const singleblog=async(req,res)=>{
    let {blogid}=req.cookies
    let singleBlog=await blogmodel.findById(blogid)
    res.render('singleblog',{singleBlog})
}

const dele=async(req,res)=>{
    let {id}=req.params
    let data=await blogmodel.findByIdAndDelete(id)
    res.send(data)
}


module.exports={blogget,blog,blogUi,allBlogUI,singleblog,dele}