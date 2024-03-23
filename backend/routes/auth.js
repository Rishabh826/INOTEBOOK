const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
router.post('/',[
 body('Name').isLength({min:3}),
 body('username').isLength({min:5}),
 body('email').isEmail(),
 body('password').isLength({min:4})
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let existingUser = await User.findOne({ email: req.body.email });
        if(existingUser){
            return res.status(400).json({error: "Sorry, user already exists."});
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hashSync(req.body.password, salt);
        let newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: hashpass,
            password: req.body.password,
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
