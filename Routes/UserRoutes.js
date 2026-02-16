const userController=require('../Controller/UserController.js')
const express=require('express')
const router=express.Router()
router.post('/saveUser',userController.saveUser)
router.post('/login',userController.loginUser)
module.exports=router