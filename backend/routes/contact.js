const express = require('express')
const ContactRouter=express.Router()
const ContactSchema=require('../models/Contact')
const {GetUser,PostUser,UpdateUser,DeleteUser,GetUserByID} =require ('../controllers/contact')

ContactRouter.get('/',GetUser)

ContactRouter.post('/',PostUser)

ContactRouter.put('/:id',UpdateUser)

ContactRouter.delete('/:id',DeleteUser)

ContactRouter.get('/:id',GetUserByID)

module.exports=ContactRouter