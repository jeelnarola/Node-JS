const {Router}=require('express')
const { body, validationResult } = require('express-validator');
const {Signup, login, post, postAll, postdelete, postpatch, searchLocation} = require('../controller/user.controller');
const auth = require('../middleware/auth');
const postmodel = require('../models/post.models');

const router=Router()

// User Signup Router
router.post("/signup",Signup)

// User Login Router
router.post("/login",login)

// User Posts Router
router.post("/post",auth,[
    body('title','title is require.').notEmpty().isLength({min:3}),
    body('body','body Require and minimum 3 letter use...').notEmpty()],post)

// User Posts get Router
router.get("/",auth,postAll)

// User Posts delete Router
router.delete("/delete/:id",auth,postdelete)

// User Posts upadate Router
router.patch("/update/:id",auth,postpatch)

// USer serach location

router.post("/search",searchLocation)



module.exports=router