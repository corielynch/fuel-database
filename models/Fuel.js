"use strict";

module.exports = function (sequelize, Sequelize) {
  const Fuel = sequelize.define("Fuel", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    submit_time: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    },

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

  // Fuel.associate = function(models) {
  //     Fuel.belongsTo(models.User, {
  //         foreignKey: {
  //             allowNull: false
  //         }
  //     });
  // }

  return Fuel;
}