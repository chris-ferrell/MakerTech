const { mongoose } = require("../db/connection.js");

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},

}, {timestamps: true}) 
    

const User = mongoose.model("User", UserSchema);

module.exports = User;
