$(document).ready(function () {

    
     $("#addBtn").on("click", event => {
         event.preventDefault();
         window.location.assign("submit-data");
     })
 
     $("#viewBtn").on("click", event => {
         event.preventDefault();
         window.location.assign("view-data");
     })
 
 });