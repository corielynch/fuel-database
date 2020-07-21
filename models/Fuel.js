'use strict';

module.exports = (sequelize, Sequelize) => {
  const Fuel = sequelize.define('Fuel', {

    submit_time: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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
  Fuel.associate = (models) => {
    // associations can be defined here
    Fuel.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Fuel;
}

// shouldn't this be exports fuel...or is it the same as return Fuel;
