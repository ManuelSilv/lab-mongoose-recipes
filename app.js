// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();
// configuring express session
var session = require('express-session')

app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true,
}))
// end configuring express session

// Connection to the database "recipeApp".
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// set up middleware
// these will always run before every request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// defining custom route protection middleware
let protectRoute = function(req, res, next) {
  if(req.session.user) next();
  else res.redirect("/views/login")
}
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var recipesRouter = require("./routes/recipes");
var loginRouter = require('./routes/login')
var signupRouter = require('./routes/signup').default

app.use('/users', userRouter);
app.use('/books', protectRoute, recipesRouter);
app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', signupRouter);
// attaching session data to res.locals, 
// making it available to all hbs files after this middleware
app.use(function(req,res,next) {
  if(req.session.user) res.locals.user = req.session.user;
  next();
})

// catch all requests that are neither part of userRouter
// booksRouter nor indexRouter
app.use(function(req, res, next) {
  next({message: "Page not found.", status: 404});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () =>{
  console.log("It's 3000 bay!")
  });
  
module.exports = app;
module.exports = router;