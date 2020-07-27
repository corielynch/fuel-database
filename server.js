// Dependencies
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 9000;
const db = require("./models");

// Instantiate our app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
 

// Set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
 

// Load passport strategies
require("./config/passport")(passport, db.User);
// For passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());

app.use(passport.session()); 
require("./routes")(app, passport);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`==> 🌎 Listening on port . Visit http://localhost:%s/ in your browser.`, PORT);
    });
});