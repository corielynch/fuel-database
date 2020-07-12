
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Fuel = sequelize.define('Fuel', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    submit_time: {
        type: 'TIMESTAMP',
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    fuel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    vehicle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    gallons: {
        type: DataTypes.DECIMAL(10,2),
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