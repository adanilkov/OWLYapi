const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET
router.get('/', (req, res) => {
    res.send('we are on posts');
});

router.get('/item', (req, res) => {
    res.send('a particular item\'s post');
});


//POST
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        startingBid: req.body.startingBid,
        currentBid: req.body.currentBid,
        buyoutPrice: req.body.buyoutPrice,
        timeRemaining: req.body.timeRemaining,
        datePosted: date.datePosted
    });
})

//export to app
module.exports = router;