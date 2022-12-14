const ContactSchema = require('../models/Contact');

exports.GetUser=async(req,res)=>{
    try{
        const Contacts =await ContactSchema.find()
        res.status(200).send({msg:"Here's your list",Contacts})
    }catch(err){
        res.status(500).send('You have no users to show')
    }
}

exports.PostUser=async(req,res)=>{
    try{
        const newContact = new ContactSchema(req.body)
        await newContact.save()
        res.status(200).send({msg:'Contact have been added',newContact})
    }catch(err){
        console.log(err)
    res.status(500).send('Could not add contact!')
}
}

exports.UpdateUser=async(req,res)=>{
    try{
        const {id}=req.params
        const updateUser= await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('Contact updated')
    }catch(err){
        res.status(500).send('Can not update')
    }
}

exports.DeleteUser=async(req,res)=>{
    try{
        const {id}=req.params
        const deleteUser= await ContactSchema.findByIdAndDelete(id)
        res.status(200).send('Contact deleted')
    }catch(err){
        res.status(500).send('Cant delete it')
    }
}

exports.GetUserByID=async(req,res)=>{
    try{
        const {id}=req.params
        const getUser =await ContactSchema.findById(id)
        res.status(200).send({msg:'this is your search result',getUser})
    }catch(err){
        res.status(500).send('Cant find him')
    }
}