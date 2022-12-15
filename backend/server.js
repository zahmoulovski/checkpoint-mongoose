const express = require('express')

const ContactRouter = require('./routes/contact')

const app=express()

const port = 2804

app.use(express.json())

const connectdb = require('./config/connectdb')

connectdb()

var cors=require('cors')

app.use(cors())

app.use('/user',ContactRouter)

app.listen(port,err=>{
    err?console.log(err):console.log(`You're connected to ${port}`)
})