const express = require('express');
const router = express.Router();
// const User = require("../models/User")
// const Recipe = require("../models/Recipe")
// const mongoose = require("mongoose")


// Recipe.create({
//   title: "Curry Chicken",
//   level:"Amateur Chef", 
//   ingredients:["Chicken breast", "Kurkuma","Salt","pepper", "rice"], cuisine:"Pakistan"}
// )



// User.insertMany(userInfo)//Add recipes to database.
//   .then(() =>
//     {
//     console.log("User Added");
//     })
//     .catch((error) => {
//     console.log(error);
// })



// Recipe.updateOne(//Update recipes.
//     {title:"Rigatoni alla Genovese"},
//     {duration: 100})
//   .then(() => {
//     console.log("Recipe succesfully updated!");
//     })
//     .catch((error) => {
//     console.log(error);
// })

// Recipe.deleteOne(//Delete model: Carrot Cake.
//     {"_id" : "5d38709e6d35111b5c20f598"})
//   .then(() => {
//     console.log("Model Succesfully deleted!")
//     })
//     .catch((error) => {
//     console.log(error);
// })

// mongoose.connection.close()//Close connection.
// .then (() =>{
//   console.log("Dababase succesfully closed!");
//   })
//   .catch((error) => {
//       console.log(error);
// });

module.exports = router;
// module.exports = Recipe;
// module.exports = User;