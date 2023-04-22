const express = require('express');
const router = express.Router();




router.get('/new', (req, res) => {
    res.render('new_community.ejs');
})

router.get('/all', (req,res) => {
    res.render('index_community.ejs')
})

router.get('/welcome' , (req,res) => {
    res.render('')
})
module.exports = router;