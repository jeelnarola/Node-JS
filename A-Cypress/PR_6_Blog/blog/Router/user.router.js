const {Router}=require('express')
const {signup, signpShow, loginShow, login, home, fetch} = require('../Controllers/user.controller')
const logincheck = require('../middleware/user.middleware')

const router=Router()

router.get("/user/signup",signpShow)
router.post("/user/signup",signup)

router.get("/user/login",loginShow)
router.post("/user/login",logincheck,login)

router.get("/user/",home)
router.get("/user/fet",fetch)

module.exports=router