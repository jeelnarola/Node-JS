const {Router}=require('express')
const {home,home2}=require('../Controllers/user.controllers')
const {login}=require('../Middlewares/login.middlewares')
const router=Router()

router.post("/",login,home)
router.get("/home",home2)
module.exports=router