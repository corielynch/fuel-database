// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;

// var db = require("../models");
//   {
//     usernameField: "username"
//   }
//   function(username, password, done) {
//     db.User.findOne({
//       where: {
//         username: username
//       }
//     })
    
//     // need to fix the code below. (know that dbUser and cb need to be changed to something else. not sure what though)
//     .then(function(dbUser) {
//       // can we 
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect username."
//         });
//       }
//       // If there is a user with the given username, but the password the user gives us is incorrect
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       // If none of the above, return the user
//       return done(null, dbUser);
//     });
//   };


// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// // Exporting our configured passport
// module.exports = passport;
