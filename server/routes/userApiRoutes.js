const express = require('express');
const router = express.Router();

// API MODS
const users = require('../api/users');

// Gets all players
router.get('/', (req,res) => res.json(users));

// Gets individual player
router.get('/:id', (req,res) => {
    const found = users.some(player => player.id === parseInt(req.params.id));

    if (found) {
        res.json(users.filter(player => player.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member not found`});
    }

})

// Create members
router.post('/', (req, res) => {
    const newMember = {
        id: 4,
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

    if (!newMember.name || !newMember.email || !newMember.gameName){
        return res.status(400).json({msg: "Invalid Request"})
    }

    users.push(newMember);
    res.json(users);
    console.log(users);
});

// Update Member
// Gets individual player
router.put('/:id', (req,res) => {
    const found = users.some(player => player.id === parseInt(req.params.id));

    if (found) {
        const updatedMember = req.body;
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

                res.json(player);
            }
        })
    } else {
        res.status(400).json({msg: `Member not found`});
    }

})

// Delete member

router.delete('/:id', (req,res) => {
    const found = users.some(player => player.id === parseInt(req.params.id));

    if (found) {
        res.json({msg: 'Player deleated', users: users.filter(player => player.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `Member not found`});
    }

})

module.exports = router;