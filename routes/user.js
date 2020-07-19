const passport = require("../config/passport/passport.js");
const path = require("path");
const db = require("../models");
const express = require("express");
const user_controller = require("../controllers/user_controller");
const isAuthenticated = require("../config/middleware/isAuthenticated")
const app = express.Router();


module.exports = (app, passport) => {

    // var loggedIn = function (req, res, next) {
    //     if (req.isAuthenticated()) {
    //         next()
    //     }
    //     else {
    //         res.status(401).send('Access Denied, Please log in')
    //     }
    // }

    app.get("/", function (req, res) {
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


    app.post("/signin", passport.authenticate('local-signin'), function (req, res) {

        console.log(req.user);
        res.render("two-buttons")
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            console.log(req.user);
        return next();
        res.redirect('/signin');

    }

    app.get("/view-data", function (req, res) {
        // res.render("view-data");

        db.Fuel.findAll().then(data => {
            console.log(data)
            res.render("view-data", { fueldata: data })
        })

        res.send("You must be signed in");

    });


    app.post("/api/fuel", function (req, res) {
        db.Fuel.create(req.body).then(results => {
            res.json(results)
        })
    })

}