const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
  username: {type: String, unigue: true},
  password: {type: String}
  
})

const User = mongoose.model("user", userSchema, "user");

module.exports = User;