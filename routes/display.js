const db = require("../models");

// Post route
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