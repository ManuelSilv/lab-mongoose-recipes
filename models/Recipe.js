const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const today = new Date(); // better use ...Date.now
const recipeSchema = new Schema({
  title: { type: String, unique:true, required: true},
  level: { type: String, value: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
  ingredients: { type: Array},
  cuisine: {type: String, required: true},
  dishType: {type: String},
  image: {type: String},
  duration : {type: Number},
  creator: {type: String},
  created: {type: Date, default: today } // Date.now also works and is a shorter notation.
});
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

 Recipe.create(new Recipe);

//  .then = () =>{
//   console.log("new recipe in progress...")
//   return Recipe.insertMany(Data);
//  })
//  .then = () =>{
//    console.log("recipe renewal updating..")
//   return.update(title: "Chicken Massala");
//  })

