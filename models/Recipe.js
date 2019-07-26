const mongoose = require('mongoose');
//const Recipe = require('./models/Recipe.js').default; // Import of the model Recipe from './models/Recipe'
//const data = require('../data.js');  // Import of the data from './data.js'
const Schema = mongoose.Schema;
//
const recipeSchema = new Schema({
  title: { type: String, unique:true, required: true},
  level: { type: String, value: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
  ingredients: { type: Array},
  cuisine: {type: String, required: true},
  dishType: {type: String},
  image: {type: String},
  duration : {type: Number},
  creator: {type: String},
  created: {type: Date, default: Date.now() } // Date.now also works and is a shorter notation.
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const userSchema = new Schema({
  username: {type: String, unigue: true},
  passwword: {type: String}
})

const User = mongoose.model("user", userSchema, "user");
module.exports = Recipe;
module.exports = User;