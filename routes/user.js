const passport = require("../config/passport/passport.js");
const path = require("path");
const db = require("../models");
const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");
module.exports = function(router) {
router.get("/", user_controller.index);

router.get("/signout", user_controller.signOutUser);

router.post("/signin", passport, user_controller.signInUser);

router.post("/", user_controller.signUpUser);
};

// module.exports = router;



// module.exports = function (app, passport) {
//     // 

//    app.get("/",function(req,res){
//        res.render("index")
//    })

//     app.get("/logout", function (req, res) {
//         console.log("Log Out Route Hit");
//         req.session.destroy(function (err) {
//             if (err) console.log(err)
//                 res.redirect('/');
//         });
//     });


//     app.post('/signup/newuser', passport.authenticate('local-signup'), function (req, res) {
//         console.log(req.user);
//         res.json(req.user);
//     });


//     app.post("/signin/user", passport.authenticate('local-signin'),function(req,res) {

//          console.log(req.user);
//          res.send("Success!");
//     });

//     function isLoggedIn(req, res, next) {
//         if (req.isAuthenticated())
//             return next();
//         res.redirect('/signin');

//     }
// }