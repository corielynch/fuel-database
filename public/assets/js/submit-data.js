$("#fuel-submit").on("click", function(event) {
    event.preventDefault();
    // Make a new Fuel object
    var newFuel = {
        fueltype: $("#fueltype").val().trim(),
        Vehicle: $("#Vehicle").val().trim(),
        gallons: $("#gallons").val().trim(), 
        data: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newFuel) 
      .then(function() { console.log("Done")},

      var row = $("<div>");
      row.addClass("fuel");

      row.append("<p>" + newFuel.user + " fueled: </p>");
      row.append("<p>" + newFuel.body + "</p>");
      row.append("<p>At " + moment(newFuel.created_at).format("h:mma on dddd") + "</p>");
      $("#fuel-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#user").val("");
  $("#fuel-box").val("");
});

// When the page loads, grab all of our fuels
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("fuel");

      row.append("<p>" + data[i].user + " fueled.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
      $("#fuel-area").prepend(row);
    }
  }
});
