const express = require('express')
const router = express.Router()

// api from server.js
router.get('/api/goals',(req,res) =>{
    res.status(200).json({
        message:'Get Goals'
     })
})

module.exports = router