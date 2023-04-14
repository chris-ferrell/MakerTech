const express = require('express');
const router = express.Router();
const Post = require('../models/post')

router.post('/', async (req,res) => {
    const post = await Post.create(req.body);
    res.redirect('/allpost')
});

router.get('/', (req,res) => {
    res.send("main route hit")
});
router.get('/create', (req,res) => {
    res.render('new.ejs');
})


module.exports = router;

