const db  = require('../models');


exports.createPost = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  db.Fuel.create({
    submit_time: req.body.submit_time,
    fuel: req.body.fuel,
    vehicle: req.body.vehicle,
    gallons: req.body.gallons
  }).then(() => {
    res.send("You submitted!")
  }).catch(err => {
    res.json(err);
  });
};