const {Router}=require("express")
const {blogget, blog, upload, blogUi, allBlogUI, singleblog, dele} = require("../Controllers/blog.controllers")
const {blogcheck, cookie} = require("../middleware/blog.middleware")

const blogRouter=Router()

blogRouter.get("/blog/create",cookie,blogget)
blogRouter.post("/blog/create",blogcheck,blog)

blogRouter.get("/blog/blogs",blogUi)
blogRouter.get('/blog/',allBlogUI)
blogRouter.get("/blog/singleblog",singleblog)

blogRouter.delete("/blog/delete/:id",cookie,dele)

module.exports=blogRouter