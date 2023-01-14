const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {userRegisterValidation, userLoginValidation} = require('../validation')


router.post('/register', async (req, res) => {
    //validation
    const {error} = userRegisterValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
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

module.exports = router;