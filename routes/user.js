const passport = require("../config/passport/passport.js");
const path = require("path");
const db = require("../models");
const express = require("express");
const user_controller = require("../controllers/user_controller");


module.exports = (app, passport) => {
    // 

   app.get("/",function(req,res){
       res.render("index")
   })

    app.get("/signout", function (req, res) {
        console.log("Log Out Route Hit");
        req.session.destroy(function (err) {
            if (err) console.log(err)
                res.redirect('/');
        });
    });

// app.get("/two-buttons", function(req, res){

// })
    app.post('/signup', passport.authenticate('local-signup'), function (req, res) {
        console.log(req.user);
        res.render("two-buttons")

    });


    app.post("/signin", passport.authenticate('local-signin'),function(req,res) {

         console.log(req.user);
        res.render("two-buttons")
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');

    }
}