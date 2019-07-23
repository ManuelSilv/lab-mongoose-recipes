const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const title = require('title');
const cuisine = require('cuisine');
const recipeSchema = new Schema({
  title: { type: String, unique:true, required: true},
  level: { type: String, value: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
  ingredients: { type: Array},
  cuisine: {type: String},
  dishType: {type: String},
  image: {type: String},
  duration : {type: Number},
  creator: {type: String},
  created: {type: Date},
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

