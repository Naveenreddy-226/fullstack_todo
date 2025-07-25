const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth =require('../models/auth')
router.post('/register',async(req,res)=>{
    try{
        const newauth=new auth(req.body);
        const details= await newauth.save();
        res.status(201).json(details);
    }catch (err){
        res.status(400).json({error:err.message});
    }
});
// Create
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read All
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read One
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted", user: deletedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
