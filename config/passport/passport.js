const bcrypt = require('bcrypt');
// const passport = require("passport");
// const User = require("../../models/User")
const LocalStrategy = require('passport-local').Strategy;
// const db = require("../../models");

// function to be called while there is a new sign/signup 
// We are using passport local signin/signup strategies for our app
module.exports = function (passport, user) {
    var User = user;

    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        }, function (req, email, password, done) {
            console.log("Signup for - ", email)
            var generateHash = function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

            }
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                //console.log(user);
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }

                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email

            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, email, password, done) {
            var User = user;

            var isValidPassword = function (userpass, password) {

                return bcrypt.compareSync(password, userpass);

            }
            console.log("logged to", email)
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                console.log(user)
                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));

    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {

        User.findById(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });


}











// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(new LocalStrategy(
//     // Our user will sign in using an email, rather than a "username"
//     {
//       usernameField: "username"
//     },
//     function(username, password, done) {
//       // When a user tries to sign in this code runs
//       db.User.findOne({
//         where: {
//           username: username
//         }
//       }).then(function(dbUser) {
//         // If there's no user with the given username
//         if (!dbUser) {
//           return done(null, false, {
//             message: "Incorrect username."
//           });
//         }
//         // If there is a user with the given username, but the password the user gives us is incorrect
//         else if (!dbUser.validPassword(password)) {
//           return done(null, false, {
//             message: "Incorrect password."
//           });
//         }
//         // If none of the above, return the user
//         return done(null, dbUser);
//       });
//     }
//   ));

  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
//   passport.serializeUser(function(user, cb) {
//     cb(null, user);
//   });

//   passport.deserializeUser(function(obj, cb) {
//     cb(null, obj);
//   });

// module.exports = passport;