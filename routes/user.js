// const User = require('../models/User')
// const express = require('express');
// const router = express.Router();

// var bcrypt = require('bcrypt');
// var SALT_WORK_FACTOR = 10;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' });
});


module.exports = router;


// preHook useSchema to encrypt password
// // User.pre('save', (next) =>{ //('save', function(next)
// //   var User = this;
// //   if (!user.isModified('password')) return next();
// //   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
// //     if(err) return next(err);
 
// //         bcrypt.hash(user.password, salt, function(err, hash){
// //             if(err) return next(err);
 
// //             user.password = hash;
// //             next();
// //         })
// //       })
// //   })

//   User
  //created User already in database

// User.create({
//   title: "Manuel",
//   password: "balbalbala"
// })

//Create new user here