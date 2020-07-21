'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {

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
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    }, {

        hooks: {
            beforeCreate: (user, options) => {
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            }

        }
    });
    User.prototype.validPassword = password => {
        return bcrypt.compareSync(password, this.password);
    }

    User.associate = (models) => {
        // Associating User with Fuel
        User.hasMany(models.Fuel, {
            onDelete: "cascade"
        });
    };

    return User;
}

// shouldn't this be exports fuel...or is it the same as return User;
