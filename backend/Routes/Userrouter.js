const express = require('express')
const router = express.Router()
const {LoginUser,Register} = require('../controllers/Usercontroller')

router.post('/login',LoginUser)
router.post('/register',Register)

module.exports=router