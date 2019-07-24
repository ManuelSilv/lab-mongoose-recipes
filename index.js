const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'



  // newRecipe.save()


// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


  

// Recipe.create({
//   title: "Curry Chicken",
//   level:"Amateur Chef", 
//   ingredients:
//   ["Chicken breast", "Kurkuma","Salt","pepper", "rice"], cuisine:"Pakistan"})

// Recipe.insertMany(data)
//   .then(() =>{//Add recipes to database
//     console.log("new recipes added");
//     })
//     .catch((error) => {
//       console.log(error);
//     })

Recipe.updateOne({
    title:"Rigatoni alla Genovese"},
    {duration: 100})
  .then(() => {//Update recipes
    console.log("Recipe succesfully updated!");
    })
    .catch((error) => {
    console.log(error);
    })