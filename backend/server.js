require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
/////////////////////////////
//////// Router import //////
const postController = require('./controllers/postRouter');
app.use('/posts', postController);

/////////////////////////////
//////// Middleware//////////
/////////////////////////////
app.use(morgan("tiny")) // logging
app.use(methodOverride("_method")) // override for put and delete request from forms.
app.use(express.urlencoded({extended:true})); // parse urlencoded request bodies
app.use(express.static("public"));

app.get('/', (req,res) => {
    res.send('default route hit!');
});


app.listen(process.env.PORT, (req, res) => {

    console.log(`Listening on port ${process.env.PORT}`);

});
