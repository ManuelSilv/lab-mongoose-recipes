const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});


module.exports = router;