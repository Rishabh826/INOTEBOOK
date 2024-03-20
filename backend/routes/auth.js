const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

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
        let newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
