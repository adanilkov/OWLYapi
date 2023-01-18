const router = require('express').Router();
const { any } = require('@hapi/joi');
const Post = require('../models/Post');

//GET
//get all
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
        //add limit/pagination later
    } catch(err) {
        res.status(400).json({message:err});
    }
});
//get by id
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.status(400).send(err)
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
        res.status(400).send(err)
        console.log(err);
    }
});

//DELETE
router.delete('/:id', async(req, res) => {
    try {
        const removed = await Post.remove(req.params.postId);
        res.status(200).json(removed);
    } catch {
        res.status(400).send(err)
    }
});

//export to app
module.exports = router;