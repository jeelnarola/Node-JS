const {Router}=require("express")

const { home, signup, get, ui, product} = require("../Controllers/Cookie.controller")
const auth = require("../middleware/auth.middleware")


const router=Router()
router.get("/get",get)
router.post("/signup",signup)
router.get("/ui",ui)
router.post("/ui",home)
router.get("/product",auth,product)

module.exports=router