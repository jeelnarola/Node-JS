const {Router}=require("express")

const { home, signup, get, ui } = require("../Controllers/Cookie.controller")


const router=Router()
router.get("/get",get)
router.post("/signup",signup)
router.get("/ui",ui)
router.post("/ui",home)

module.exports=router