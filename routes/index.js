// const mongoose = require('mongoose');
// const Recipe = require('./routes/Recipe'); // Import of the model Recipe from './models/Recipe'
// const data = require('./data.js/index.js.js');  // Import of the data from './data.js'
// const User = require('./user.js');
// const userInfo = require('./userinfo.js/index.js.js')

const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;


