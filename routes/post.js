// Requiring our models
const db = require("../models");

module.exports = function(app) {

// POST route for saving a new post
  app.post("/api/post", function(req, res) {
    db.Fuel.create(req.body).then(function(dbFuel) {
      res.json(dbFuel);
    });
  });
};

// Display route
module.exports = function(app) {

  app.get("/api/fuel/:id", function(req, res) {
      db.Fuel.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbFuel) {
        res.json(dbFuel);
      });
    });
  };

