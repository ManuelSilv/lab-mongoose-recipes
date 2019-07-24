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

// const newRecipe = new Recipe;
//  ({
//   title: "Curry Chicken", level:"Amateur Chef", ingredients:
//   ["Chicken breast", "Kurkuma","Salt","pepper", "rice"], cuisine:
//   "Pakistan"})
//   // newRecipe.save()


//   .then = () =>{//Update recipe
//       console.log("new recipe in progress...")
//       return Recipe.update(title: "Chicken Curry");};

//   .then = () =>{//Remove recipe
//         console.log("new recipe in progress...")
//         return Recipe.insertMany(Data);};

//   .then = () =>{//Close database
//           console.log("new recipe in progress...")
//           return Recipe.insertMany(Data);};
// //  })
// //  .then = () =>{
// //    console.log("recipe renewal updating..")
// //   return.update(title: "Chicken Massala");
// //  })
module.exports = Recipe;