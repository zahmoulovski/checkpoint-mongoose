const mongoose = require('mongoose')
const ContactSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true
    },
    description:String
})

module.exports=mongoose.model('contacts',ContactSchema)