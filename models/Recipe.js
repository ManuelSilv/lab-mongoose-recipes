const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const router = express.Router();
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


module.exports = Recipe;
module.exports = router;