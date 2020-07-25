const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

// Function to be called while there is a new sign/signup 
// We are using passport local signin/signup strategies for our app
module.exports = function (passport, user) {
    var User = user;
    passport.use("local-signup", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true // Allows us to pass back the entire request to the callback

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
                if (user) {
                    return done(null, false, {
                        message: "That e-mail is already taken"
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
    passport.use("local-signin", new LocalStrategy(
        {
            // By default, local strategy uses username and password, we will override with email
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true // Allows us to pass back the entire request to the callback

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
                        message: "Email does not exist"
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: "Something went wrong with your sign-in"
                });
            });
        }
    ));

    // Serialize
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // De-serialize user 
    passport.deserializeUser(function (id, done) {
        User.findOne({ where: { id: id } }).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
}