const db = require('../models');

exports.index = (req, res) => {
  res.render("index");
};

exports.signOutUser = (req, res) => {
  console.log("Log-out Requested");
  req.session.destroy(err => {
    if (err) console.log(err)
    res.redirect('/');
  });
};

// login
exports.signInUser = (req, res) => {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the home page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  console.log(req.user);

  // can send to different route below if logged in; the submit/view data page
  res.render("two-buttons")
};

// register a user
exports.signUpUser = (req, res) => {

  db.User.findAll({
    where: { email: req.body.email }
  }).then(users => {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });

    } else {
      db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      }).then(() => {
        res.render("two-buttons")
      }).catch(err => {
        res.json(err);
      });
    }
  })
};