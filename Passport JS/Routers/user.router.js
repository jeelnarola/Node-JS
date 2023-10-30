const {Router}=require('express')
const {signup, home, login, userlogin,} = require('../Controller/user.controller')
const passport = require('passport')

const router=Router()

router.post("/signup",signup)
router.get("/",home)
router.get("/login",login)
router.post("/login",passport.authenticate("local"),userlogin)
module.exports=router