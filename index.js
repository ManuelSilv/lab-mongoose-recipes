const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp".
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
});

Recipe.create({
  title: "Curry Chicken",
  level:"Amateur Chef", 
  ingredients:["Chicken breast", "Kurkuma","Salt","pepper", "rice"], cuisine:"Pakistan"}
)

Recipe.insertMany(data)//Add recipes to database.
  .then(() =>
    {
    console.log("new recipes added");
    })
    .catch((error) => {
    console.log(error);
})

Recipe.updateOne(//Update recipes.
    {title:"Rigatoni alla Genovese"},
    {duration: 100})
  .then(() => {
    console.log("Recipe succesfully updated!");
    })
    .catch((error) => {
    console.log(error);
})

Recipe.deleteOne(//Delete model: Carrot Cake.
    {"_id" : "5d38709e6d35111b5c20f598"})
  .then(() => {
    console.log("Model Succesfully deleted!")
    })
    .catch((error) => {
    console.log(error);
})

mongoose.connection.close()//Close connection.
.then (() =>{
  console.log("Dababase succesfully closed!");
  })
  .catch((error) => {
      console.log(error);
});

