const express = require('express');
const router = express.Router();
const user = require('../models/user');
const { body, validationResult } = require('express-validator');
router.post('/',[
 body('Name').isLength({min:3}),
 body('username').isLength({min:5}),
 body('email').isEmail(),
 body('password').isLength({min:4})
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
    .catch(err=>{console.log(err)
r
    })
})
module.exports  = router