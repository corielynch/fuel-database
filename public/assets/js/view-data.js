// $("#viewBtn").on("click", event => {
    // preventDefault on a submit event
    // event.preventDefault();









//     $.ajax("/signup", {
//         type: "POST",
//         data: newUser
//     }).then(
//         (data) => {
//             if (data.duplicateUser) {
//                 alert("Account associated with e-mail already exists")
//             } else {
//                 console.log("created new user");
//                 // take to submit page

//             }
//         }
//     );
// });


$(document).ready(function () {
    $("#viewBtn").on("click", event => {
        event.preventDefault();
        const url = "/view-data";
        window.location.replace(url);
        // alert("hi");
        })
    });
// });
// }
// )