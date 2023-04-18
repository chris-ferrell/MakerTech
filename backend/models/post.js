// title

const { mongoose } = require('../db/connection');
// const User = require('./User.js/index.js')

const postsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    post: {
      type: String,
      required: true
    },
    image: String,
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User'
    // }
  }, {timestamps: true});
  
const UserPost = mongoose.model('userPost', postsSchema);

module.exports = UserPost
