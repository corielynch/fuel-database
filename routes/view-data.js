const db = require("../models")

module.exports = app => {
    app.get("/view-data", function(req,res){
        db.Fuel.findAll().then(data => {
            console.log(data)
            res.render("view-data", {fueldata: data})
        })
    })
    app.post("/api/fuel", function(req,res){
        db.Fuel.create(req.body).then(results => {
            res.json(results)
        }) 
    })
    
}