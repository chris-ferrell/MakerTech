const { mongoose, Schema } = require("../db/connection");

const CreationSchema = new mongoose.Schema({
    username: {type: String, required: false},
    email: {type: String, required: false},
    password: {type: String, required: false},

}, {timestamps: true}) 
    

// const User = model("User", UserSchema);
const UserCreate = mongoose.model('userAccounts', CreationSchema);

module.exports = UserCreate;
