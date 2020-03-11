/**
 *      Developer:  Zachary Anderson
 *      Date:       3/11/2020
 * 
 *      About:      This file has all of the routing for the Admin user API and deals with changeing and updating the database based on what 
 *                  request was made.
 *                  
 */

const express = require('express');
const router = express.Router();

// ===== Mods =====
const adminUsers = require('../api/adminUsers')

router.get('/', (req,res) =>{
    res.json(adminUsers);
})

// ===== Export Routes ===== 
module.exports = router;