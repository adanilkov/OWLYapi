const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/User');
const User = require('../models/User');
const {userRegisterValidation, userLoginValidation} = require('../validation')


router.post('/register', async(req, res) => {
    //validation
    const {error} = userRegisterValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.pass, salt);
    //data
    const user = new User({
        email: req.body.email,
        pass: hashedPass
    });
    try {
        const savedUser = await user.save();
        res.status(200).json({user: user._id});
    } catch(err) {
        res.status(400).send(err)
    }
});


router.post('/login', async(req, res) => {
    //login validation
    const {error} = userLoginValidation(req.body);
    if(error) { return res.status(400).send(error.details[0].message); }
    const user = await User.findOne({email: req.body.email})
    if (!user) { return res.status(400).message("Invalid email or password") }
    const validPass = await bcrypt.compare(req.body.pass, user.pass)
    if (!validPass) { return res.status(400).message("Invalid email or password") }
    //jwt token assignment
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header ('auth-token', token).send(token);
});

 