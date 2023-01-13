const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET
//get all
router.get('/', async (req, res) => {
    try {
        const posts = Post.find();
        //add limit/pagination later
    } catch(err) {
        res.status(500).json({message: err});
    }
});
//get by id
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.status(200).json(post);
    } catch {
        res.status(500).json({message: err});
    }
});

//POST
//add a product post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        startingBid: req.body.startingBid,
        currentBid: req.body.currentBid,
        buyoutPrice: req.body.buyoutPrice,
        timeRemaining: req.body.timeRemaining,
        status: req.body.status
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json({message: err});
        console.log(err);
    }
});

//DELETE
router.delete('/:postId', async(req, res) => {
    try {
        const removed = await Post.remove(req.params.postId);
        res.status(200).json(removed);
    } catch {
        res.status(500).json({message: err});
    }
});

//export to app
module.exports = router;