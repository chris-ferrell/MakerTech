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

router.post('/:id', async (req, res) => {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts/all');
})

// main route
router.get('/', (req,res) => {
    res.send("main route hit")
});
// edit route 
router.get('/:id/edit',async (req,res) => {

   const editPost = await Post.findById(req.params.id);

    res.render(
        '../views/posts/edit.ejs',
        {

            editPost

        });
})
//put route for edit route
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const editPost = await Post.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.redirect('/posts/all');
});
// create new post route
router.get('/create', (req,res) => {
    res.render('../views/posts/new.ejs');
})

// delete
router.delete('/:id', async (req, res) => {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts/all')
})
router.get('/all', async (req,res) => {
    const allpost = await Post.find({});
    res.render(
        '../views/posts/index.ejs',
    {
        allpost
    })
});
module.exports = router;

