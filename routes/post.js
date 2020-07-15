// Requiring our models
const db = require("../models");

// Post route
module.exports = function(app) {

// POST route for saving a new post
  app.post("/api/post", function(req, res) {
    db.Fuel.create(req.body).then(function(dbFuel) {
      res.json(dbFuel);
    });
  });
};

