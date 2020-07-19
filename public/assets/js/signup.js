// Make sure we wait to attach our handlers until the DOM is fully loaded
$(document).ready(function () {

    // Submit event creating a new user account
     $("#signup").on("submit", event => {
         // preventDefault on a submit event
         event.preventDefault();

         const newUser = {
             firstname: $("#firstname").val().trim(),
             lastname: $("#lastname").val().trim(),
             email: $("#email").val().trim(),
             password: $("#password").val().trim()
         };

         if (!newUser.firstname || !newUser.lastname || !newUser.email || !newUser.password) {
             return alert("Please fill out all fields");
         }

         // Send the POST request
         $.ajax("/signup", {
             type: "POST",
             data: newUser
         }).then(
            (data) => {
                 if (data.duplicateUser) {
                     alert("Account associated with e-mail already exists")
                 } else {
                     console.log("created new user");
                     // take to submit page
                   
                }
            }
        );
   });


    // Adding the show password option
    const togglePassword = document.getElementById('togglePassword');

    const showOrHidePassword = () => {
      const password = document.getElementById('password');
      if (password.type === 'password') {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    };
    
    togglePassword.addEventListener('change', showOrHidePassword);



       signUpUser()



       function signUpUser () {
           // Submit event creating a new user account
           $("#signup").on("submit", event => {
             // preventDefault on a submit event
             event.preventDefault();

             const newUser = {
               firstname: $("#firstname").val().trim(),
               lastname: $("#lastname").val().trim(),
               email: $("#email").val().trim(),
               password: $("#password").val().trim()
             };

             // Send the POST request
             $.ajax("/", {
               type: "POST",
               data: newUser
             }).then(
               () => {
                 console.log("created new user");

                location.reload();
              }
           );
          });
      };











});




