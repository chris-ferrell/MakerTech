require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();

// logged in used
// app.use('/:userId?', userRoutingController);
/////////////////////////////
//////// Middleware//////////
/////////////////////////////
app.use(morgan("tiny")) //logging// 
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically

app.get('/', (req,res) => {
    res.send('default route hit!');
});

/////////////////////////////
//////// Router import //////
const postController = require('./controllers/postRouter');
console.log('Mounting postController to /posts route');
app.use('/posts', postController);


app.listen(process.env.PORT, (req, res) => {

    console.log(`Listening on port ${process.env.PORT}`);

});
