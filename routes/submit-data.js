 $(document).ready(function () {

    // Submit event creating a new Fuel account
     $("#submit").on("submit", event => {
         // preventDefault on a submit event
         event.preventDefault();

         const newFuel = {
             fueltype: $("#fueltype").val().trim(),
             Vehicle: $("#Vehicle").val().trim(),
             gallons: $("#gallons").val().trim()
         };

         if (!newFuel.fueltype || !newFuel.Vehicle || !newFuel.gallons) {
             return alert("Please fill out all fields");
         }

         // Send the POST request
         $.ajax("/submit-data", {
             type: "POST",
             data: newFuel
         }).then(
            (data) => {
                 if (data.duplicateFuel) {
                     alert("Account associated with e-mail already exists")
                 } else {
                     console.log("created new Fuel");
                     // take to submit page
                     submit-data.reload();
                }
            }
        );
   });
