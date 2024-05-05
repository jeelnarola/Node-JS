const {Router}=require("express")
const {blogget, blog, upload, blogUi, allBlogUI, singleblog, dele} = require("../Controllers/blog.controllers")
const {blogcheck, cookie} = require("../middleware/blog.middleware")
const blogmodel = require("../Model/blog.schema")

const blogRouter=Router()

blogRouter.get("/blog/create",cookie,blogget)
blogRouter.post("/blog/create",blogcheck,blog)

blogRouter.get("/blog/blogs",blogUi)
blogRouter.get('/blog/',allBlogUI)
blogRouter.get("/blog/singleblog",singleblog)

blogRouter.delete("/blog/delete/:id",cookie,dele)


blogRouter.get("/blog/edit/:id",async(req,res)=>{
    let {id}=req.params
    let data=await blogmodel.findById(id)
    console.log(data);
    res.render('blog',{data,edit:true})
})

blogRouter.patch("/blog/edit/:id",cookie,async(req,res)=>{
    let {id}=req.params

    let data=await blogmodel.findByIdAndUpdate(id,req.body)
    res.ren(data)
})

module.exports=blogRouter