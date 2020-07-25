$(document).ready(function () {
    $(".viewBtn").on("click", function (event) {
        event.preventDefault();
        const url = "/view-data";
        window.location.replace(url);
    })

    $(".addBtn").on("click", function (event) {
        event.preventDefault();
        const url = "/submit-data";
        window.location.replace(url);
    })

    $("#send").on("click", function (event) {
        event.preventDefault();
        const fuelType = $("input[name='fueltype']:checked").val();
        const vehicleType = $("input[name='vehicletype']:checked").val();
        const gallons = $("#ga").val();
        const newEntry = {
            fuel: fuelType,
            vehicle: vehicleType,
            gallons: gallons
        };

        $.ajax("/submit-data", {
            type: "POST",
            data: newEntry,
        }).then(
            function () {
                console.log("Entry Successful!");
                const url = "/view-data";
                window.location.replace(url);
            }
        );
    })
});