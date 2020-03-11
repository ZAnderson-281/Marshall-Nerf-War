/**
 *      Developer:  Zachary Anderson
 *      Date:       3/11/2020
 * 
 *      About:      This file has all of the routing for the Player API and deals with changeing and updating the database based on what 
 *                  request was made.
 *                  
 */

const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://zac:Poptart514@testmnw-crhav.azure.mongodb.net/test?retryWrites=true&w=majority";


// ===== API MODUALS =====
const users = require('../api/users');

// ===== Gets all players =====
router.get('/', (req,res) => res.json(users));

// ===== Gets individual player =====
router.get('/:id', (req,res) => {
    const found = users.some(player => player.id === parseInt(req.params.id));

    if (found) {
        res.json(users.filter(player => player.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member not found`});
    }

})

// ===== Create Player =====
router.post('/', (req, res) => {
    // Create a default player object
    const newMember = {
        name: req.body.name,
        email: req.body.email,
        paid: req.body.paid,
        gameName: req.body.gameName,
        team: req.body.team,
        teamRanking: req.body.teamRanking,
        status: req.body.status,
        timedOut: req.body.timedOut,
        bounty: req.body.bounty,
        kills: req.body.kills,
        killsName: req.body.killsName,
        killedBy: req.body.killedBy,
        killedBy2: req.body.killedBy2,
        notes: req.body.notes
      };

    // If the user did not have a name email ore game name error
    if (!newMember.name || !newMember.email || !newMember.gameName){
        return res.status(400).json({msg: "Invalid Request"})
    }

    //  Push the entered data to the database
    users.push(newMember);

    // Connect to the database
    MongoClient.connect(url, function(err, db) {
        // If error connecting, report error
        if (err) throw err;

        // Create or pull the correct Data base
        let dbo = db.db("MNWPlayerData");

        // Select the collection and insert the new Player 
        dbo.collection("Players").insertOne(newMember, (err, res) => {
            // If error report the home
            if (err) throw err;
            // report change to server
            console.log("New User Inserted");
            // Close the database
            db.close();
        });
      });
    // Respond to request
    res.json(users);
});

// ===== Update Member =====

// Gets individual player
router.put('/:id', (req,res) => {

    // Check if it exists in the database
    const found = users.some(player => player.id === parseInt(req.params.id));


    // If it exists
    if (found) {
        // Set the bodys request to an object
        const updatedMember = req.body;

        // Go through each object and replace each item if it was passed into the object
        users.forEach(player => {
            if(player.id === parseInt(req.params.id)){
                player.name = updatedMember.name ? updatedMember.name : player.name;
                player.email = updatedMember.email ? updatedMember.email : player.email;
                player.gameName = updatedMember.gameName ? updatedMember.gameName : player.gameName;
                player.team = updatedMember.team ? updatedMember.team : player.team;
                player.teamRanking = updatedMember.teamRanking ? updatedMember.teamRanking : player.teamRanking;
                player.status = updatedMember.status ? updatedMember.status : player.status;
                player.timedOut = updatedMember.timedOut ? updatedMember.timedOut : player.timedOut;
                player.bounty = updatedMember.bounty ? updatedMember.bounty : player.bounty;
                player.kills = updatedMember.kills ? updatedMember.kills : player.kills;
                player.killsName = updatedMember.killsName ? updatedMember.killsName : player.killsName;
                player.killedBy = updatedMember.killedBy ? updatedMember.killedBy : player.killedBy;
                player.killedByTwo = updatedMember.killedByTwo ? updatedMember.killedByTwo : player.killedByTwo;
                player.notes = updatedMember.notes ? updatedMember.notes : player.notes;

                // Respond with the player 
                res.json(player);
            }
        })
    } else {
        // Bad request: respond with error
        res.status(400).json({msg: `Member not found`});
    }

})

// ===== Delete member =====
router.delete('/:id', (req,res) => {
    // Check if player exists
    const found = users.some(player => player.id === parseInt(req.params.id));

    // If Player exists
    if (found) {
        // Del the player in the database
        res.json({msg: 'Player deleated', users: users.filter(player => player.id !== parseInt(req.params.id))});
    } else {
        // Bad Request: respond with error msg
        res.status(400).json({msg: `Member not found`});
    }

})

// Export all routes
module.exports = router;