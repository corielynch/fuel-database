///Dependencies

const express = require ("express");
const path = require ("path");
const session = require ("express-session");
const passport = require ("./config/passport");
const config = require("./config/extra-config");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8000;
var db = require("./models");

// instantiate our app
const app = express();

//allow sessions
app.use(session({ secret: 'Truckdriver', cookie: { maxAge: 60000 }}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// const isAuth 				 = require("./config/middleware/isAuthenticated");
// const authCheck 		 = require('./config/middleware/attachAuthenticationStatus');


//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(authCheck);


// require('./routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


// our module get's exported as app.
module.exports = app;

// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
//   });