const express = require('express')
const connectdb = require('./config/connectdb')
const ContactRouter = require('./routes/contact')
const app=express()
const port = 5001
app.use(express.json())

connectdb()

app.use('/api/user',ContactRouter)







app.listen(port,err=>{
    err?console.log(err):console.log(`You're connected to ${port}`)
})