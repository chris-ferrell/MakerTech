require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();

// authentication 
const session = require('express-session');
const MongoStore = require('connect-mongo');

const Post = require('../backend/models/post.js');

app.use(
    session({
        store: MongoStore.create({
            mongoUrl:process.env.DATABASE_URL
        }),
        
        secret: process.env.SECRET,
        
        resave: false,
        saveUninitialzed: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30
            
        }
        
    }))
    /////////////////////////////
    //////// Middleware//////////
    /////////////////////////////
app.use(cors());
app.use(express.static('public'));
// app.use('/public', express.static('public'));
 // serve files from public statically
app.set('view engine', 'ejs');
app.use(morgan("tiny")) //logging// 
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies

const homeController = require('./controllers/homeRouter')
app.use('/', homeController);

app.get('/', async (req,res) => {
    const allpost = await Post.find({});
    res.render('landing.ejs', 
    {
        allpost
        
    })
});

/////////////////////////////
//////// Router import //////
const postController = require('./controllers/postRouter');
console.log('Mounting postController to /posts route');
app.use('/posts', postController);

// const userController = require('./controllers/userRouting');
// console.log('Mouting userController to /create route');
// app.use('/user', userController);

const communityController = require('./controllers/communityRouter');
console.log('Mounting communityRouter to /community route');
app.use('/community', communityController);

app.listen(process.env.PORT, (req, res) => {

    console.log(`Listening on port ${process.env.PORT}`);

});
