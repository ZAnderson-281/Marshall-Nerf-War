const express = require('express');
const router = express.Router();

// Modual
const adminUsers = require('../api/adminUsers')

router.get('/', (req,res) =>{
    res.json(adminUsers);
})

module.exports = router;