// Requiring our models
const db = require("../models");
const express = require('express');
const router  = express.Router();
const fuel_controller = require("../controllers/fuel_controller")
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = function(app) {
// POST route for saving a new post
app.post('/submit-data', fuel_controller.createPost);

};