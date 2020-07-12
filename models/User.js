module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
    return User;
  };

var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return User
};
