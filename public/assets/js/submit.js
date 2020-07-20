
         const { Sequelize, Model, DataTypes } = require("sequelize");
         const sequelize = new Sequelize("sqlite::memory:");
         
         //need to log new current fuel coming in from the employee/user
         const Fuel = sequelize.define("fuel", {
           fueltype: DataTypes.TEXT,
           vehicle: DataTypes.INTEGER,
           gallons: DataTypes.INTEGER
         });
         
         (async () => {
             await sequelize.sync({ force: true });

         
         const newFuel = Fuel.build({ newFuel: "gallons" });
         console.log(gallons instanceof Fuel); // true
         console.log(newFuel.Fuel); // "employees new fuel log in gallons"
         
         await newFuel.save();
         console.log('newFuel was saved to the database!');
         
         const newFuel = await Fuel.create({ newFuel: "gallons"});
         console.log(newFuel.toJSON()); 
         console.log(JSON.stringify(newFuel, null, 4));
         
         await newFuel.reload();
         console.log(newFuel.Fuel);
         })
         (
         
         );