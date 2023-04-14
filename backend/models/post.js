// title

const { mongoose } = require('../db/connection');
const User = require('./user.js')

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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }, {timestamps: true});
  
module.exports = postsSchema
