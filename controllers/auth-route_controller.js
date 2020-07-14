var db = require('../models');

exports.indexPage = function(req,res) {
  res.render('auth-route/index', {
    layout: 'main-index'
  });
};

exports.viewUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  res.json("/");
};

// register a user
exports.signUpUser = function(req,res) {

  db.User.findAll({
    where: {username: req.body.username}
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    
    } else {
      db.Auth-route.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.send({redirect: '/'});
      }).catch(function(err) {
        res.json(err);
      });
    }
  })
};
