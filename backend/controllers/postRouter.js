const express = require('express');
const router = express.Router();
const UserPost = require('../models/post')

// post routes
router.post('/', async (req,res) => {
    console.log('Handling POST request');
    console.log(req.body);
    const post = await UserPost.create(req.body);
    res.redirect('/posts')
});
// main route
router.get('/', (req,res) => {
    res.send("main route hit")
});
// create new post route
router.get('/create', (req,res) => {
    res.render('new.ejs');
})


module.exports = router;

