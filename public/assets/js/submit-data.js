$("#submit").on("click", function(event) {
    event.preventDefault();
    // Make a new Fuel object
    var newFuel = {
        unlead: $("#unlead").val().trim(),
        dies: $("#dies").val().trim(),
        dump: $("#dump").val().trim(),
        Back: $("#Back").val().trim(), 
        company: $("#company").val().trim(),
        personal: $("#personal").val().trim(),
        small: $("#small").val().trim(),
        data: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    // Send an AJAX POST-request with jQuery
    $.post("/api/post", newFuel) 
      .then(function() { console.log("Fuel submitted")},

      var row = $("<div>");
      row.addClass("fuel");

      row.append("<p>" + newFuel.user + " fueled: </p>");
      row.append("<p>" + newFuel.body + "</p>");
      row.append("<p>At " + moment(newFuel.created_at).format("h:mma on dddd") + "</p>");
      $("#ga").prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $("#user").val("");
  $("#ga").val("");
});

// When the page loads, grab all of our fuels
$.get("/api/fuel/:id", function(data) {

  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("fuel");

      row.append("<p>" + data[i].user + " fueled.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
      $("#ga").prepend(row);
    }
  }
});
