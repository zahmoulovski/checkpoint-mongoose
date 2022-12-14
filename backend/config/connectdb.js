const mongoose = require('mongoose')

const connectdb=async()=>{
    try{
       await mongoose.connect(`mongodb+srv://yassine:Yassine0324@cluster.gzxzi66.mongodb.net/contactList?retryWrites=true&w=majority`)
        console.log('you are connected to db')
    }catch(err){
     console.log(err)   
    }
    
}

module.exports=connectdb;
