const {Router}=require('express')
const {Home, signup, login, userde, userget} = require('../Controller/user.controller')
const loginM = require('../middleware/user.middleware')
// const loginM = require('../middleware/user.middleware')

const router=Router()

router.get("/",Home)
router.post('/user/signup',signup)
router.post('/user/login',loginM,login)
router.delete('/user/delete/:id',userde)
router.get('/user/',userget)



module.exports=router