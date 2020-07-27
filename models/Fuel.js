"use strict";

module.exports = function(sequelize, Sequelize) {
    const Fuel = sequelize.define("Fuel", {

        fuel: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        vehicle: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        gallons: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
    });

    return Fuel;
}