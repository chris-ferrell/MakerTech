const express = require('express');
const router = express.Router();
const UserPost = require('../models/post')
const Post = require('../models/post.js')

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

// 
router.get('/all', async (req,res) => {
    const allpost = await Post.find({});
    res.render(
        'index.ejs',
    {
        allpost
    })
});
module.exports = router;

