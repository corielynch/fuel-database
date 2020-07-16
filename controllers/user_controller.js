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
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  console.log(req.user);
  
  // can send to different route below if logged in; the submit/view data page
  res.json("/");
};

// register a user
exports.signUpUser = (req, res) => {

  db.User.findAll({
    where: { username: req.body.username }
  }).then(users => {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });

    } else {
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(() => {
        // can send to the submit or view page afterward with different route below
        res.send({ redirect: '/' });
      }).catch(err => {
        res.json(err);
      });
    }
  })
};
