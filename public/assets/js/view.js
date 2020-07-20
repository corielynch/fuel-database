$(document).ready(function () {
    $("#viewBtn").on("click", event => {
        event.preventDefault();
        const url = "/view-data";
        window.location.replace(url);
         alert("newFuel was saved to the database!");
        })
    });
