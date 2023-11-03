const {Router}=require('express')
const {signup, signpShow, loginShow, login, home} = require('../Controllers/user.controller')

const router=Router()

router.get("/signup",signpShow)
router.post("/signup",signup)

router.get("/login",loginShow)
router.post("/login",login)

router.get("/",home)

module.exports=router