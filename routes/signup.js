const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next){
  console.log(req.body)
  var username = req.body.username;
  var password = req.body.password;

  bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    User.create({username: username, password: hash}).then((user)=>{
      console.log(`User ${user} created`)
      res.redirect('/signup')
    })
  });

  


 
})
module.exports = router;
