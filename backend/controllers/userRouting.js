const express = require('express');
const router = express.Router();
const createUser = require('../models/createUser');
const User = require('../models/User.js');

// const createAccount = require('../views/user/createAccount.ejs');
// const Post = require('../models/post')

// post routes
router.post('/create', async (req,res) => {
    console.log('Handling POST request');
    console.log(req.body);
    const post = await createUser.create(req.body);
    res.redirect('/user/create')
});
// user/login ???
router.post('/login', async (req,res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        // if the user cant be found
        console.log(user)
        if(!user){
            return res.redirect('/user/login?error=Invalid username or password');
        }
        // creating a session
        req.session.userId = user._id;
        res.redirect('/dashboard')
        // res.send(`${req.body.username}`)
        // if(user){
        //     // session stuff would go here
        //     res.send(`logged in as: ${req.body.username}`)
        // }
    } catch (error) {
        console.log(`ERROR CAUGHT: ${error}`)
    }
})

 router.get('/login', async (req,res) => {
     res.render('../views/user/login.ejs')
 })

router.get('/create', (req,res) => {
    res.render('../views/user/createAccount.ejs', 
    {

    })
})


module.exports = router