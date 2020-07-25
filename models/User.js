"use strict";
const bcrypt = require("bcrypt");

module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM("active", "inactive"),
            defaultValue: "active"
        }
    }, {
        hooks: {
            beforeCreate: function(user, options) {
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            }
        }
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }

    // User.associate = function(models) {
    //     // Associating User with Fuel
    //     User.hasMany(models.Fuel, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
}