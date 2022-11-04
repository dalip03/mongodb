// const connectDB = require('./config/db')

const express = require('express')

const dotenv = require('dotenv').config()

const port =process.env.PORT || 5000

// connectDB()


const app = express()

app.use('/api/goals',require('./routes/goalRoutes'))

app.post('/api/goals',(req,res) =>{
    res.status(200).json({
        message:'post Goals'
     })
})


app.listen(port,() => console.log(`server started at port ${port}`))