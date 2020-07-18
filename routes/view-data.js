// const db = require("../models")
// const isAuthenticated = require("../config/middleware/isAuthenticated")

// module.exports = app => {
//     // function isAuthorized (req, res, next) {
//     //     if (req.user) {
//     //         return next();
//     //     } else {
//     //         res.send("You must be signed in");
//     //     }
//     // };
//     app.get("/view-data", function(req,res){
//         if (req.user) {
//             db.Fuel.findAll().then(data => {
//                 console.log(data)
//                 res.render("view-data", {fueldata: data})
//             })
//         } else {
//             res.send("You must be signed in");
//         }
//         });

        
//     app.post("/api/fuel", function(req,res){
//         db.Fuel.create(req.body).then(results => {
//             res.json(results)
//         }) 
//     })
    
// }