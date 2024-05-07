const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const user = require('../models/user');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'rishabh';
// create user info 
router.post('/', [
    body('name').isLength({ min: 3 }),
    body('username').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 4 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "Sorry, user already exists." });
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password, salt);
        let newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashpass,
        });

        const data = {
            user: {
                id: newUser.id
            }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.status(201).json({ authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});
// user login 
router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 4 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Sorry, user does not exist." });
        }
        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            return res.status(400).json({ error: "Sorry, password is not correct." });
        }
        const data = {
            user: {
                id: user.id
            }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.status(200).json({ authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});
// here we fetch the user detail with the help of tocken;

router.post('/detail', fetchuser,
 async (req, res) => {

      try {
        userId = req.user.id;
      const userdet = await user.findById(userId).select("-password");
      res(userdet);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;
