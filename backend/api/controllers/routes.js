const express = require('express');
const router = express.Router();
const controller = require('./controllers');
const middelware = require('./middelware');

router.get('/', (req,res)=>{
    res.send("API WORKS")
})



module.exports = router;